# 할두 (HALDO)

> 할머니가 되어서도 두근두근!

5060 시니어 여성을 위한 커뮤니티 & 마켓 서비스입니다.

**서비스 URL:** https://haldo.kr

## 프로젝트 구조

```
PROJECT/
├── HALDO-WEB/      # 랜딩 페이지 (Next.js, GitHub Pages 배포)
├── HALDO-APP/      # 서비스 앱 (Next.js + Supabase)
├── POLICY/         # 정책 문서 (개인정보처리방침, 이용약관 등)
├── contents/       # 기획 문서 (피드백, 소개 등)
├── img/            # 이미지 리소스
└── PRD.md          # 제품 요구사항 문서
```

### HALDO-WEB (랜딩 페이지)

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages + GitHub Actions
- **Domain:** haldo.kr

```bash
cd HALDO-WEB
npm install
npm run dev       # http://localhost:3000
npm run build     # 정적 파일 생성 (out/)
```

### HALDO-APP (서비스 앱)

- **Framework:** Next.js (App Router)
- **Backend:** Supabase (Auth, Database)
- **Styling:** Tailwind CSS

```bash
cd HALDO-APP
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 HALDO-WEB을 자동으로 빌드 및 GitHub Pages에 배포합니다.

## 라이선스

(C) 2026 Haldo. All rights reserved.
