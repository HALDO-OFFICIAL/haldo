# 할두 앱 프로젝트 스펙 참조

## 기술 스택 (현재)
- **Framework:** Next.js 16.2.2 (App Router)
- **Language:** TypeScript 5, React 19.2.4
- **Styling:** Tailwind CSS 4 (CSS 변수 기반 테마)
- **Font:** Pretendard (CDN)
- **Node.js:** 22 (Homebrew, `/opt/homebrew/opt/node@22/bin/`)
- **PWA:** manifest.json 설정 완료
- **Backend:** 미연동 (Supabase 예정)

## 구현 현황

### 완료
- [x] 프로젝트 초기화 (Next.js 16 + TS + Tailwind 4)
- [x] 디자인 시스템 (CSS 변수, Tailwind 매핑, Pretendard)
- [x] 메인 피드 페이지 (`page.tsx`) — 더미 데이터 5개
- [x] CertBox 인증 글쓰기 — 텍스트 300자 + 태그(#건강/#사람/#추천/#수다) + 사진 첨부 모달 + 등록 확인 모달
- [x] FeedCard — 아바타, 🍀등급 배지, 본문, 이미지, 좋아요/댓글/공유, 태그
- [x] ConfirmModal — 범용 확인 모달
- [x] FeedHeader — "인증" / "MY" 상단 헤더
- [x] BottomNav — 5개 탭 (홈/검색/글쓰기/마켓/내정보)
- [x] 마이페이지 — 프로필 카드 + 등급/포인트/초대장 + 메뉴 리스트
- [x] PWA manifest.json

### 미구현 (PRD 기반)

#### Phase 1: 백엔드 (Supabase)
- [ ] Task 1-1: profiles, invites 테이블 + 심사 필드 + RLS
- [ ] Task 1-2: 등급 계산 로직 (월별 인증 80%, 상위 10%/1%)
- [ ] Task 1-3: posts 페이지네이션 API + 크레딧 적립

#### Phase 2: 프론트엔드
- [ ] Task 2-1: 실제 무한 스크롤 (Intersection Observer)
- [ ] Task 2-1: 댓글 모달/페이지
- [ ] Task 2-1: 태그 필터링 (피드 필터)
- [ ] Task 2-2: 마이페이지 대시보드 (태그 통계 바 차트)
- [ ] Task 2-3: 권한 분기 (비로그인→글쓰기 숨김, 노블레스→클럽 개설)
- [ ] 검색 페이지 (`/search`)
- [ ] 마켓 페이지 (`/market`)
- [ ] 글쓰기 전용 페이지 (`/write`) 또는 현재 CertBox 유지
- [ ] 소셜 로그인 (카카오/네이버) UI + Supabase Auth 연동

#### Phase 3: QA
- [ ] E2E 테스트 (초대→심사→승인→글쓰기→크레딧)
- [ ] 점진적 롤아웃 (대기열)

## PRD 핵심 요구사항

### 폐쇄형 커뮤니티
- 기존 멤버 초대로만 가입, 심사 절차
- 누구나 보기 가능, 댓글/글쓰기는 승인 등급 이상만

### 피드
- 300자 이내, 사진 1장 선택, 태그 필수
- 무한 스크롤, 좋아요, 댓글, 본인 글 수정/삭제
- 글 작성 시 크레딧 적립

### 멤버십 등급 (4단계)
| 등급 | 조건 | 혜택 |
|------|------|------|
| 클래식 (Lv.1) | 기본 | — |
| 시그니처 (Lv.2) | 월 인증 80%+ | 크레딧 2만원, 초대장 1장 |
| 프리미엄 (Lv.3) | 상위 10% | 크레딧 3만원, 초대장 2장 |
| 노블레스 (Lv.4) | 상위 1% | 크레딧 5만원, 초대장 3장, 클럽 개설권 |

### 상품 큐레이션
- 3~5개 노출, 등급별 할인 차등

## 기획안 이미지
- `Samples/main.jpg` — 메인 피드 화면
- `Samples/write.png` — 인증 글쓰기 모달 플로우
