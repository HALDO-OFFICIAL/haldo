# 할두(HALDO) 프로젝트 컨텍스트

## 프로젝트 개요
- **서비스명:** 할두 (HALDO) - "할머니가 되어서도 두근두근!"
- **대상:** 5060 시니어 여성
- **목적:** 커뮤니티 & 마켓 서비스 랜딩 페이지
- **배포 URL:** https://haldo.kr
- **저장소:** https://github.com/HALDO-OFFICIAL/haldo

## 기술 스택
- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Pretendard (최소 18px)
- **Deployment:** GitHub Pages + GitHub Actions (자동 배포)
- **Domain:** haldo.kr (GitHub Pages 커스텀 도메인, Let's Encrypt SSL)

## 디자인 토큰
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--background` | `#fffefd` | 배경색 (웜 화이트) |
| `--foreground` | `#121212` | 본문 텍스트 |
| `--point` | `#01d776` | 포인트 컬러 (할두 그린) |
| `--point-dark` | `#00b862` | 포인트 다크 |
| `--point-light` | `#e6faf0` | 포인트 배경 |
| `--border` | `#e8e8e8` | 구분선 |
| `--border-light` | `#f2f2f2` | 연한 구분선 |
| `--icon` | `#c3c5c7` | 아이콘 |
| `--text-default` | `#b5b5b5` | 기본 보조 텍스트 |
| `--text-sub` | `#707070` | 서브 텍스트 |
| `--kakao` | `#FEE500` | 카카오 버튼 |
| `--naver` | `#03C75A` | 네이버 버튼 |

## 프로젝트 구조
```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, lang="ko")
│   ├── ClientLayout.tsx    # 클라이언트 레이아웃 (헤더, 반응형)
│   ├── globals.css         # 글로벌 스타일 & CSS 변수
│   ├── page.tsx            # 메인 홈 (랜딩 페이지)
│   ├── favicon.ico         # 할두 로고 파비콘
│   ├── login/page.tsx      # 로그인 (카카오/네이버 UI)
│   ├── community/page.tsx  # 커뮤니티 (스캐폴딩)
│   ├── market/page.tsx     # 마켓 (스캐폴딩)
│   └── mypage/page.tsx     # 마이페이지 (스캐폴딩)
├── components/
│   ├── Header.tsx          # 로고 헤더 (100px, 중앙 정렬)
│   ├── BottomNav.tsx       # 하단 탭 바 (현재 비활성)
│   ├── PostCard.tsx        # 카드형 게시글
│   ├── CommentInput.tsx    # 댓글 입력
│   ├── FloatingButton.tsx  # 플로팅 버튼
│   ├── ConfirmModal.tsx    # 확인 모달
│   └── DesktopNav.tsx      # 데스크톱 네비게이션
└── contexts/
    └── FontSizeContext.tsx  # 전역 폰트 크기 조절
```

## 진행 이력

### Phase 1: 프로젝트 초기화
- Next.js + TypeScript + Tailwind CSS + App Router 프로젝트 생성
- PRD 3.1 공통 기능 구현
  - 가독성 최적화 UI (폰트 크기 조절 A+/A-)
  - 반응형 웹 (Mobile-First)
  - 심플 커뮤니티 (카드형 게시글, 큰 글씨 댓글)
  - 직관적 마켓 (문자 주문 플로팅 버튼)
  - 간편 로그인 UI (카카오/네이버)

### Phase 2: 디자인 시스템 적용
- Pretendard 폰트 적용
- 커스텀 컬러 팔레트 (웜톤, 할두 그린 포인트)
- 로고 이미지 변환: PS(실제 PDF) → PNG (macOS sips 사용)
- 헤더에 로고 이미지 적용 (100px, 중앙 정렬)

### Phase 3: 배포 파이프라인 구축
- GitHub Actions CI/CD 워크플로우 작성 (.github/workflows/deploy.yml)
- Next.js 정적 빌드 설정 (output: "export")
- GitHub Pages 배포 (haldo-official.github.io/haldo)
- basePath 이슈 해결 (이미지 경로)

### Phase 4: 랜딩 페이지 제작
- INTRO.md 기반 원페이지 소개글 작성
  - 히어로 섹션: "인생 후반전, 나를 위해 살 준비 되셨나요?"
  - 할두 클럽: 글쓰기, 재테크, 패들보드, 글램핑 클럽 소개
  - 할두 마켓: 정성 담긴 상품 큐레이션
  - 실적: 80개+ 누적 클럽, 2천건+ 참여, 26곳+ 파트너사
  - 할두 조카들: 운영팀 소개
  - 외부 링크: 인스타그램, 네이버 스토어, 문의 폼

### Phase 5: 피드백 반영 (3차례)
**FEEDBACK.md (1차)**
- 폰트 색상 #121212, font-weight normal 통일
- 텍스트 center 정렬
- 실적 박스 개별 분리
- 링크 스타일 통일
- 할/두 포인트 컬러 스왑
- 섹션 간 구분선(hr) 추가
- 이미지-본문 간격 조정

**FEEDBACK-MINOR.md (2차)**
- 세부 간격 조정
- 이탤릭 스타일 적용
- 저작권 텍스트 수정

**FEEDBACK-02.md (3차)**
- "북클럽" 삭제
- "2,000건+" → "2천건+"
- 스타트업 경험 문구 수정
- "하지만", "감사하게도" 삭제

### Phase 6: 추가 디테일
- 섹션 제목 h2 → text-[30px] font-medium, br 줄바꿈, leading-snug 통일
- 페이지 타이틀: "할두 - 할머니가 되어서도 두근두근!"
- favicon: 할두 로고 (Python Pillow로 PNG → ICO 변환)
- 하단 탭 바 비활성화 (모바일 웹)
- meta description 제거

### Phase 7: 커스텀 도메인
- haldo.kr DNS A 레코드 설정 (185.199.108-111.153)
- public/CNAME 파일 추가
- basePath 제거 (커스텀 도메인은 루트 경로)
- Let's Encrypt SSL 인증서 발급 (자동)
- HTTPS 강제 적용
- Chrome HSTS 캐시 이슈 대응 (Vercel → GitHub Pages 전환 시)

### Phase 8: 문서화
- README.md 업데이트 (프로젝트 A to Z)
- PROJECT-CONTEXT.md 작성 (본 문서)

## 커밋 히스토리
```
660a396 docs: README.md 프로젝트 문서 업데이트
7d56ebc style: 피드백 반영 - 문구 수정 및 description 제거
75615f7 feat: 커스텀 도메인 haldo.kr 적용 및 favicon 변경
705e157 fix: 페이지 타이틀 변경
0ea366b fix: 섹션 제목 h2에 leading-snug 및 br 줄바꿈 형식 통일
1171c93 style: 섹션 제목 줄바꿈을 br 태그로 통일
6c6e1eb style: 마이너 피드백 반영 및 레이아웃 정리
40f32ec style: 헤더와 히어로 섹션 사이 간격 추가
0689951 feat: FEEDBACK.md 피드백 반영 및 디자인 개선
c46e6ba feat: 메인 홈페이지를 할두 원페이지 소개글로 교체
d365c1e fix: GitHub Pages에서 로고 이미지 경로 수정
b8c2ff5 ci: GitHub Pages 정적 배포 설정
0819720 feat: PRD 3.1 공통 기능 구현 - 할두 시니어 커뮤니티
15774df Initial commit from Create Next App
```

## 향후 과제
- 카카오/네이버 소셜 로그인 백엔드 연동 (Supabase)
- 커뮤니티 기능 구현 (게시글 CRUD, 댓글)
- 마켓 기능 구현 (상품 목록, 문자 주문)
- 마이페이지 기능 구현
- 폰트 크기 조절(A+/A-) UI 헤더에 복원
- 하단 탭 바 활성화 (서브 페이지 완성 후)
