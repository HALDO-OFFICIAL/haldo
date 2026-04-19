---
name: senior-ux-review
description: "할두 앱의 시니어 UX 접근성과 통합 정합성을 검증하는 스킬. 폰트 크기(18px+), 터치 영역(48px+), 고대비, 한국어 용어, 라우팅 정합성, 컴포넌트 Props 매칭을 검증한다. 'UX 검토해줘', '접근성 확인해줘', '품질 검증해줘', 'QA 해줘' 등의 요청 시 사용."
---

# Senior UX Review — 시니어 접근성 & 통합 정합성 검증 가이드

할두의 핵심 사용자는 디지털 기기가 서툰 5060 여성이다.

## 검증 절차

### Step 1: 대상 파일 수집
- `src/app/{page}/page.tsx` — 페이지
- `src/components/*.tsx` — 사용된 컴포넌트
- `src/app/globals.css` — 디자인 토큰

### Step 2: 시니어 접근성 검증

**폰트 (CRITICAL)**
- Grep으로 `text-\[` 패턴 검색하여 모든 명시적 폰트 크기 추출
- 본문 17px 미만 → CRITICAL
- `text-sm`(14px), `text-xs`(12px) 사용 → CRITICAL

**터치 (CRITICAL)**
- 버튼/링크 48px 미만 → CRITICAL
- 아이콘 버튼 44px 미만 → FIX
- 버튼 간 간격 8px 미만 → FIX

**용어 (FIX)**
- Feed→소통방, Credit→포인트, Tier→등급, Tag→주제
- Loading→불러오는 중, Error→문제가 발생했어요

**모달/확인 (FIX)**
- 중요 액션(삭제, 등록, 결제)에 ConfirmModal 사용 여부
- 모달 버튼 텍스트가 명확한지 (네/아니요, 취소/확인)

### Step 3: 통합 정합성 검증

**라우팅**
1. `src/app/` page.tsx에서 URL 경로 추출
2. BottomNav의 NAV_ITEMS href 대조
3. FeedHeader의 Link href 대조
4. 페이지 내 모든 Link/a href 검증

**컴포넌트 Props**
1. 컴포넌트 정의의 interface와 사용처의 전달 props 매칭
2. optional props에 대한 fallback 처리 확인

**디자인 토큰**
- 하드코딩된 색상값 대신 Tailwind 클래스 사용 여부
- `rounded-2xl`(카드), `rounded-xl`(버튼) 일관성

### Step 4: 반응형 검증
- 모바일 기본 레이아웃 깨짐 없는지
- max-w-lg 컨테이너(layout.tsx)와 컴포넌트 폭 충돌 없는지
- BottomNav fixed 포지셔닝과 콘텐츠 패딩(pb-[80px]) 매칭

## 리포트 형식

```markdown
# QA Report
## 검증 대상: [파일/기능명]
## 결과 요약: PASS N / FIX N / CRITICAL N

### 시니어 접근성
- [판정] 항목: 설명
  - 위치: 파일:라인
  - 수정: (FIX/CRITICAL)

### 통합 정합성
...
```

## 판정 기준

| 등급 | 기준 | 조치 |
|------|------|------|
| CRITICAL | 시니어가 기능 사용 불가 또는 런타임 에러 | 반드시 수정 |
| FIX | 사용 가능하나 불편함 | 권장 수정 |
| PASS | 기준 충족 | 조치 불필요 |
