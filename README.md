# 김상연 대표 | 네스트솔루션 모바일 프로필

> 17년 임상 경력을 바탕으로 의원·병원의 CS 관리, 마케팅, 경영 개선, 인력 관리를 지원하는 네스트솔루션의 모바일 프로필 페이지입니다.

**라이브 URL** → [nestsolution-mobile-profile-simon.vercel.app](https://nestsolution-mobile-profile-simon.vercel.app)

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 18 + TypeScript |
| 빌드 도구 | Vite 6 |
| 스타일링 | CSS Modules + Tailwind CSS 4 |
| UI 컴포넌트 | MUI, Radix UI, shadcn/ui |
| 패키지 매니저 | pnpm |
| 배포 | Vercel |

---

## 프로젝트 구조

```
src/
├── assets/
│   ├── fonts/          # GmarketSans WOFF2 (Medium 500, Bold 700)
│   ├── images/         # WebP 최적화 이미지, SVG 로고
│   └── videos/         # 네스트솔루션 소개 영상
├── sections/
│   ├── HeroSection/    # 프로필 헤더 (사진, 이름, 태그)
│   ├── VideoSection/   # 소개 영상 섹션
│   └── ...
├── styles/
│   ├── fonts.css       # @font-face 정의
│   └── theme.css       # 전역 테마
└── main.tsx
public/
└── og-image.webp       # OG 소셜 공유 이미지
```

---

## 로컬 실행

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행 (http://localhost:5173)
pnpm dev

# 프로덕션 빌드
pnpm build
```

---

## 성능 최적화 포인트

- **이미지 포맷** — 모든 이미지를 WebP (quality 75)로 변환하여 용량 절감
- **폰트** — TTF → WOFF2 변환, 미사용 Light(300) 웨이트 제거, `font-display: swap` 적용
- **히어로 이미지** — `fetchPriority="high"` 로 브라우저 최우선 로드
- **영상** — `preload="none"` 으로 초기 로딩 시 네트워크 요청 지연
- **네스트 로고** — SVG 포맷 사용 (WebP 대비 경량)

---

## OG / SNS 공유

```
제목:  김상연 대표 | 네스트솔루션
설명:  18년 임상 경력을 바탕으로 의원·병원의 CS 관리, 마케팅,
       경영 개선, 인력 관리를 지원합니다.
       네스트솔루션과 함께 더 나은 병원 운영을 시작하세요.
이미지: /og-image.webp (1200×630)
```

---

## 배포

Vercel에 자동 배포됩니다. `master` 브랜치에 푸시하면 빌드가 트리거됩니다.

```json
// vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
