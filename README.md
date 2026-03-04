# 할두 (HALDO)

> 할머니가 되어서도 두근두근!

5060 시니어 여성을 위한 커뮤니티 & 마켓 서비스 랜딩 페이지입니다.

**배포 URL:** https://haldo.kr

## 기술 스택

- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Pretendard
- **Deployment:** GitHub Pages + GitHub Actions
- **Domain:** haldo.kr (커스텀 도메인, SSL 적용)

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, 한국어 설정)
│   ├── ClientLayout.tsx    # 클라이언트 레이아웃 (헤더, 반응형)
│   ├── globals.css         # 글로벌 스타일 & 디자인 토큰
│   ├── page.tsx            # 메인 홈 (랜딩 페이지)
│   ├── login/page.tsx      # 로그인 (카카오/네이버 소셜 로그인 UI)
│   ├── community/page.tsx  # 커뮤니티 (스캐폴딩)
│   ├── market/page.tsx     # 마켓 (스캐폴딩)
│   └── mypage/page.tsx     # 마이페이지 (스캐폴딩)
├── components/
│   ├── Header.tsx          # 로고 헤더
│   ├── BottomNav.tsx       # 하단 탭 바
│   ├── PostCard.tsx        # 카드형 게시글
│   ├── CommentInput.tsx    # 댓글 입력
│   ├── FloatingButton.tsx  # 플로팅 버튼
│   ├── ConfirmModal.tsx    # 확인 모달
│   └── DesktopNav.tsx      # 데스크톱 네비게이션
└── contexts/
    └── FontSizeContext.tsx  # 전역 폰트 크기 조절 (A+/A-)
```

## 디자인 시스템

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--background` | `#fffefd` | 배경색 (웜 화이트) |
| `--foreground` | `#121212` | 본문 텍스트 |
| `--point` | `#01d776` | 포인트 컬러 (할두 그린) |
| `--point-light` | `#e6faf0` | 포인트 배경 |
| `--border` | `#e8e8e8` | 구분선 |
| `--icon` | `#c3c5c7` | 아이콘 |

- 기본 폰트 크기: 18px
- 최소 터치 영역: 48px
- Mobile-First 반응형

## 주요 기능

- **랜딩 페이지:** 할두 서비스 소개 (클럽, 마켓, 실적, 팀 소개)
- **가독성 최적화:** 큰 글씨, 고대비, 웜톤 컬러
- **소셜 로그인 UI:** 카카오 / 네이버 (UI 구현, 백엔드 연동 예정)
- **반응형 웹:** 모바일 최적화 레이아웃

## 로컬 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 빌드 & 배포

```bash
npm run build   # 정적 파일 생성 (out/ 디렉토리)
```

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 GitHub Pages에 배포합니다.

## 라이선스

© 2026 Haldo. All rights reserved.
