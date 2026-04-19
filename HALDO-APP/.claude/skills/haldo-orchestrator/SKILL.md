---
name: haldo-orchestrator
description: "할두 앱의 전체 개발을 조율하는 오케스트레이터. 백엔드(Supabase 스키마, RLS, Auth), 프론트엔드(페이지, 컴포넌트, 훅), QA(시니어 접근성, 통합 정합성)를 단계적으로 조율한다. '기능 만들어줘', '페이지 추가해줘', '피드 구현해줘', '구현해줘', '개발해줘' 등 개발 작업 요청 시 반드시 트리거. 단순 질문이나 설명 요청에는 트리거하지 않는다."
---

# Haldo App Orchestrator

할두 앱의 backend-dev, frontend-dev, senior-ux-qa 에이전트를 조율하여 PRD 기반 기능을 구현하는 통합 스킬.

## 실행 모드: 서브 에이전트

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 스킬 | 출력 |
|---------|--------------|------|------|------|
| backend-dev | backend-dev | DB 스키마, RLS, Auth | setup-supabase | supabase/, src/types/ |
| frontend-dev | frontend-dev | 페이지, 컴포넌트, 훅 | implement-feature | src/ |
| senior-ux-qa | senior-ux-qa | 시니어 UX + 통합 정합성 검증 | senior-ux-review | _workspace/qa_report.md |

## 빌드 환경

모든 에이전트의 npm/node 명령어 실행 시 PATH 설정이 필요하다:
```bash
export PATH="/opt/homebrew/opt/node@22/bin:/usr/bin:$PATH"
```

## 워크플로우

### Phase 1: 요구사항 분석
1. 사용자 요청에서 구현할 기능 범위 파악
2. `_workspace/` 생성
3. PRD 태스크 매핑 — `references/project-specs.md`에서 해당 항목 확인
4. 백엔드 변경 필요 여부 판단

### Phase 2: 백엔드 구축 (조건부)

새 테이블/RLS 변경이 필요한 경우에만 실행:

```
Agent(
  subagent_type: "backend-dev",
  model: "opus",
  prompt: "[백엔드 요구사항]
    Skill 도구로 /setup-supabase 호출하여 가이드 확인.
    기존 supabase/migrations/ 확인.
    산출물: migrations/ + src/types/supabase.ts"
)
```

### Phase 3: 프론트엔드 구현

```
Agent(
  subagent_type: "frontend-dev",
  model: "opus",
  prompt: "[프론트엔드 요구사항]
    Skill 도구로 /implement-feature 호출하여 가이드 확인.
    기존 컴포넌트(FeedCard, CertBox, ConfirmModal 등) 재사용.
    빌드 환경: export PATH='/opt/homebrew/opt/node@22/bin:/usr/bin:$PATH'
    구현 후 npm run build로 검증.
    변경 파일 목록과 주요 변경 내용 요약."
)
```

### Phase 4: 시니어 UX & 통합 정합성 검증

```
Agent(
  subagent_type: "senior-ux-qa",
  model: "opus",
  prompt: "[변경된 파일 목록]
    Skill 도구로 /senior-ux-review 호출하여 가이드 확인.
    변경 파일과 관련 컴포넌트를 모두 읽기.
    _workspace/qa_report.md에 결과 저장."
)
```

### Phase 5: 수정 반영 (조건부)

QA에서 CRITICAL이 있으면 frontend-dev 재호출.

### Phase 6: 정리
1. `_workspace/` 보존
2. 결과 요약: 구현 기능, 변경 파일, QA 결과, 다음 단계

## 데이터 흐름

```
사용자 요청 → [Phase 1] 분석
  → [Phase 2] backend-dev (조건부)
  → [Phase 3] frontend-dev → src/
  → [Phase 4] senior-ux-qa → qa_report.md
  → [Phase 5] frontend-dev (CRITICAL 시)
  → [Phase 6] 결과 요약
```

## PRD Phase 매핑

| PRD 태스크 | 백엔드 | 프론트엔드 | 현황 |
|-----------|--------|----------|------|
| Task 1-1: User DB | profiles, invites + RLS | 회원가입 폼 | 미구현 |
| Task 1-2: Tier Logic | tier_history, Edge Fn | 등급 배지, 대시보드 | UI만 완료 |
| Task 1-3: Feed API | posts 페이지네이션 | 피드, 글쓰기, 무한스크롤 | UI 완료, 백엔드 미연동 |
| Task 2-1: Main Feed | — | 댓글 모달, 태그 필터 | 피드/글쓰기 완료, 댓글 미구현 |
| Task 2-2: My Page | — | 태그 통계 차트 | 레이아웃만 완료 |
| Task 2-3: Feature Flag | — | 권한별 UI 분기 | 미구현 |

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 빌드 실패 | 에이전트 내 자체 수정. 2회 실패 시 사용자 보고 |
| QA CRITICAL 잔존 | 사용자에게 잔존 항목 보고 |
| 타입 불일치 | QA 발견 → backend-dev 재호출 |
| node 경로 에러 | PATH에 `/opt/homebrew/opt/node@22/bin` 추가 |

## 테스트 시나리오

### 정상 흐름: 댓글 기능 추가
1. "피드에 댓글 기능 추가해줘"
2. Phase 1: PRD Task 2-1 매핑
3. Phase 2: 건너뜀 (기존 스키마 충분)
4. Phase 3: frontend-dev → 댓글 모달 컴포넌트 + FeedCard 연동
5. Phase 4: QA → 폰트/터치/라우팅 검증
6. Phase 6: 결과 요약

### 에러 흐름: Supabase 연동
1. "피드를 실제 DB에 연동해줘"
2. Phase 2: backend-dev → posts 테이블 + RLS
3. Phase 3: frontend-dev → usePosts 훅 + supabase 클라이언트
4. Phase 4: QA → DB 타입 ↔ 훅 타입 교차 검증 (CRITICAL 발견)
5. Phase 5: frontend-dev 수정
6. Phase 6: 결과 요약
