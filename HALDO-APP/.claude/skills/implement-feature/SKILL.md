---
name: implement-feature
description: "할두 앱에서 새 페이지, 컴포넌트, 기능을 구현하는 스킬. Next.js 16 App Router + TypeScript + Tailwind CSS 4 기반으로 시니어 친화적 UI를 생성한다. '페이지 만들어줘', '컴포넌트 추가해줘', '기능 구현해줘', '피드 구현해줘' 등의 요청 시 사용. 단순 질문이나 설명 요청에는 트리거하지 않는다."
---

# Implement Feature — 할두 기능 구현 가이드

할두 앱의 디자인 시스템, 시니어 접근성 기준을 준수하여 기능을 구현하는 절차적 가이드.

## 구현 전 확인

1. 기존 코드 패턴 확인 — `src/components/`의 기존 컴포넌트와 `src/app/`의 페이지 패턴을 따른다
2. 디자인 토큰 확인 — `src/app/globals.css`의 CSS 변수를 사용하고 하드코딩 금지
3. 재사용 컴포넌트 확인 — ConfirmModal, FeedCard, CertBox 등 기존 컴포넌트 우선 활용

## 현재 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (Pretendard, PWA, lang="ko")
│   ├── globals.css         # 디자인 토큰 (CSS 변수 + Tailwind 매핑)
│   ├── page.tsx            # 메인 피드 (CertBox + FeedCard 목록, 클라이언트)
│   └── mypage/page.tsx     # 마이페이지 (프로필 + 등급/포인트 + 메뉴)
└── components/
    ├── FeedHeader.tsx      # 상단 헤더 ("인증" / "MY")
    ├── CertBox.tsx         # 인증 글쓰기 (텍스트+태그+사진 모달 플로우)
    ├── FeedCard.tsx        # 피드 카드 (아바타, 🍀배지, 좋아요/댓글/공유)
    ├── BottomNav.tsx       # 하단 탭 (홈/검색/글쓰기/마켓/내정보)
    └── ConfirmModal.tsx    # 범용 확인 모달 (제목 + 취소/확인)
```

## 페이지 구현 패턴

### 새 페이지 생성
```
src/app/{page-name}/page.tsx
```

이 프로젝트의 모든 페이지는 동일한 구조를 따른다:
```tsx
"use client";  // 인터랙션이 있으면 필수

import FeedHeader from "@/components/FeedHeader";
import BottomNav from "@/components/BottomNav";

export default function PageName() {
  return (
    <>
      <FeedHeader />
      <main className="flex-1 pb-[80px]">
        {/* 콘텐츠 */}
      </main>
      <BottomNav />
    </>
  );
}
```

- `pb-[80px]`: BottomNav 높이만큼 하단 패딩
- 레이아웃 컨테이너(max-w-lg)는 `layout.tsx`에서 처리하므로 페이지에서 중복하지 않는다

### BottomNav 탭 추가
새 주요 페이지를 추가하면 `src/components/BottomNav.tsx`의 NAV_ITEMS에 등록한다. 이모지 아이콘 + 텍스트 병행 필수.

## 컴포넌트 시니어 접근성 필수 기준

```tsx
// 버튼: 최소 48px, 큰 글씨
<button className="min-h-[48px] px-6 py-3 text-[17px] font-semibold rounded-xl">

// 본문: 최소 17~18px
<p className="text-[17px] leading-relaxed text-foreground">

// 카드: 충분한 패딩
<div className="p-4 rounded-2xl border border-border">

// 입력: 큰 터치 영역
<textarea className="w-full min-h-[100px] p-3 text-[17px] bg-tag-bg rounded-2xl border border-border-light" />

// 터치 영역이 작은 아이콘 버튼: min-w/min-h로 보장
<button className="min-h-[44px] min-w-[44px] flex items-center">
```

## 디자인 토큰 매핑

| 용도 | Tailwind 클래스 | 값 |
|------|----------------|-----|
| 배경 | `bg-background` | #fffefd |
| 본문 텍스트 | `text-foreground` | #121212 |
| 포인트 | `text-point`, `bg-point` | #01d776 |
| 포인트 다크 | `bg-point-dark` | #00b862 |
| 포인트 배경 | `bg-point-light` | #e6faf0 |
| 구분선 | `border-border` | #e8e8e8 |
| 연한 구분선 | `border-border-light` | #f2f2f2 |
| 보조 텍스트 | `text-text-sub` | #707070 |
| 비활성 텍스트 | `text-text-default` | #b5b5b5 |
| 아이콘 | `text-icon` | #c3c5c7 |
| 태그 배경 | `bg-tag-bg` | #f5f5f5 |

## 모달 패턴

기존 `ConfirmModal` 컴포넌트를 재사용한다:
```tsx
<ConfirmModal
  isOpen={showModal}
  title="확인 메시지"
  confirmText="네"
  cancelText="취소"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## 더미 데이터 패턴

백엔드 미연동 상태에서는 페이지 상단에 더미 데이터를 배열로 정의:
```tsx
const DUMMY_DATA = [
  { id: 1, name: "항목 1", ... },
];
```

이미지는 picsum.photos CDN:
```
https://picsum.photos/seed/{unique-key}/{width}/{height}
```

## 빌드 검증

구현 완료 후 반드시:
```bash
export PATH="/opt/homebrew/opt/node@22/bin:/usr/bin:$PATH" && npm run build
```

node 경로 설정이 필요하다. Node.js는 Homebrew node@22로 설치되어 있다.
