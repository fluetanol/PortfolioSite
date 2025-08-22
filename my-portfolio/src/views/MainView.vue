<template>
  <!-- head 안에 추가 -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
    rel="stylesheet"
  />

  <header class="navbar">
    <nav class="nav-inner container">
      <a class="brand" @click.prevent="scrollTo('hero')">JTS</a>
      <ul class="nav-links">
        <li>
          <a :class="{ active: activeSection === 'hero' }" @click.prevent="scrollTo('hero')"
            >Hero</a
          >
        </li>
        <li>
          <a
            :class="{ active: activeSection === 'portfolio' }"
            @click.prevent="scrollTo('portfolio')"
            >Portfolio</a
          >
        </li>
        <li>
          <a :class="{ active: activeSection === 'skills' }" @click.prevent="scrollTo('skills')"
            >Skills</a
          >
        </li>
        <li>
          <a :class="{ active: activeSection === 'footer' }" @click.prevent="scrollTo('footer')"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>

  <!-- 한 화면씩 스크롤 스냅되는 컨테이너 -->
  <div class="snap-root">
    <!-- 1. Hero -->
    <section id="hero" class="snap-section section--hero" tabindex="0" aria-label="Hero">
      <div class="container">
        <h1 class="hero-title">Jung Tae Seung</h1>
        <h2 class="hero-title-explain">신나는 걸 만들고 픈 개발자</h2>
        <hr />
        <div class="desc-container">
          <p class="desc">
            <a href="https://github.com/fluetanol"><i class="fa-brands fa-github"></i>Github</a>
          </p>
          <p class="desc">
            <a href="#"><i class="fa-brands fa-notion"></i>Notion</a>
          </p>
        </div>
        <p class="desc">Email | etanolfly98@gmail.com</p>
      </div>
      <div class="hero-right">
        <img src="@/assets/images/DotImage2.png" alt="Dot Illustration" class="hero-dot-image" />
      </div>
    </section>

    <section
      id="portfolio"
      class="snap-section section--works"
      tabindex="0"
      aria-label="Portfolio"
      data-reveal
    >
      <div class="container">
        <h2 class="title" style="margin-bottom: 16px" data-reveal>Portfolio</h2>

        <div class="portfolio-grid">
          <article
            v-for="(p, i) in portfolios"
            :key="p.id"
            class="p-card"
            data-reveal
            :style="{ '--i': i }"
          >
            <div class="p-thumb" v-if="p.image">
              <img :src="p.image" :alt="`${p.title} thumbnail`" />
            </div>
            <h3 class="p-title">{{ p.title }}</h3>
            <p class="p-desc">{{ p.desc }}</p>
            <div class="p-tags" v-if="p.tags?.length">
              <span v-for="t in p.tags" :key="t" class="p-tag">#{{ t }}</span>
            </div>
            <div class="p-actions" v-if="p.links?.length">
              <a
                v-for="l in p.links"
                :key="l.href"
                class="p-link"
                :href="l.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ l.label }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. Awards & Skills -->
    <section
      id="skills"
      class="snap-section section--skills"
      tabindex="0"
      aria-label="Awards and Skills"
    >
      <div class="container">
        <h1 class="title">수상경험 및 기술 스택</h1>
        <p class="desc">뱃지/아이콘/연표 등으로 구성</p>
      </div>
    </section>

    <!-- Footer (스냅 포함/미포함 선택 가능) -->
    <footer id="footer" class="footer--area snap-footer">
      <div class="container" style="padding: 28px 0; color: var(--muted); text-align: center">
        여기는 footer입니다.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type LinkItem = { label: string; href: string }
type PortfolioItem = {
  id: number
  title: string
  desc: string
  tags?: string[]
  image?: string
  links?: LinkItem[]
}

const portfolios: PortfolioItem[] = [
  {
    id: 1,
    title: 'Emoji Game (Three.js + WebRTC)',
    desc: '표정 인식 기반 미니 게임. 실시간 감정 분석/충돌 판정.',
    tags: ['Three.js', 'WebRTC', 'Face-API'],
    image: '/assets/portfolio/emoji-thumb.png',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Travel Planner (Vue + Spring)',
    desc: '관심사 기반 여행지 추천, 벡터 검색/프롬프트 파이프라인.',
    tags: ['Vue', 'TypeScript', 'Spring'],
    image: '/assets/portfolio/travel-thumb.png',
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    id: 3,
    title: 'Unity Tank AI',
    desc: 'NavMesh + 물리 이동 혼합, 장애물 회피/사거리 전투 로직.',
    tags: ['Unity', 'C#', 'AI'],
    image: '/assets/portfolio/tank-thumb.png',
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    id: 4,
    title: 'Face Dataset Tool',
    desc: '동양인 표정 데이터 수집/전처리 워크플로 자동화.',
    tags: ['YOLO', 'TF.js'],
    image: '/assets/portfolio/dataset-thumb.png',
    links: [{ label: 'GitHub', href: '#' }],
  },
]

const activeSection = ref<'hero' | 'portfolio' | 'skills' | 'footer'>('hero')

function scrollTo(id: 'hero' | 'portfolio' | 'skills' | 'footer') {
  const root = document.querySelector('.snap-root') as HTMLElement | null
  const target = document.getElementById(id)
  if (!root || !target) return
  // 네브바 높이만큼 보정
  const navH = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim()
  const navHeight = parseInt(navH || '64', 10)
  const top = target.offsetTop - navHeight
  root.scrollTo({ top, behavior: 'smooth' })
}

onMounted(() => {
  const root = document.querySelector('.snap-root') as HTMLElement | null
  if (!root) return

  // === 이미 있는 data-reveal IO (그대로 유지) ===
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (reduceMotion) {
    els.forEach((el) => el.classList.add('in'))
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        }
      },
      { root, threshold: 0.15, rootMargin: '0px 0px -15% 0px' },
    )
    els.forEach((el) => io.observe(el))
    onBeforeUnmount(() => io.disconnect())
  }

  // === 활성 섹션 하이라이트용 IO ===
  const secIds = ['hero', 'portfolio', 'skills', 'footer'] as const
  const sections = secIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

  const ioActive = new IntersectionObserver(
    (entries) => {
      // 가장 화면 비중이 큰 섹션을 active로
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) {
        const id = (visible[0].target as HTMLElement).id as (typeof secIds)[number]
        activeSection.value = id
      }
    },
    {
      root,
      threshold: [0.2, 0.5, 0.8], // 비율에 따라 갱신
      rootMargin: '0px 0px -10% 0px',
    },
  )
  sections.forEach((s) => ioActive.observe(s))
  onBeforeUnmount(() => ioActive.disconnect())
})
</script>

<style>
:root {
  --bg-dark: #0a0a0a; /* 메인 배경 */
  --bg-alt: #111111; /* 섹션 구분용 */
  --text-main: #e5e7eb; /* 기본 텍스트 */
  --text-muted: #9ca3af; /* 보조 텍스트 */
  --primary: #00ff84; /* 포인트 그린 */
  --primary-dark: #00cc66; /* hover 시 딥 그린 */
  --border-dark: #1f2937; /* 보더 */
}
</style>

<style scoped>
:root {
  --nav-h: 64px; /* 네브바 높이 */
}

/* 네브바 */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-dark);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.brand {
  font-weight: 800;
  letter-spacing: 0.2px;
  color: var(--text-main);
  text-decoration: none;
  cursor: pointer;
}
.nav-links {
  display: flex;
  gap: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links a {
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--text-muted);
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}
.nav-links a:hover {
  color: var(--text-main);
  background: #111;
}
.nav-links a.active {
  color: var(--primary);
  background: rgba(0, 255, 132, 0.08);
  box-shadow: inset 0 0 0 1px rgba(0, 255, 132, 0.18);
}

/* 스크롤 컨테이너가 네브바 높이를 고려해서 스크롤 */
.snap-root {
  height: calc(100dvh - var(--nav-h));
  overflow-y: auto;
  scroll-snap-type: none; /* 이미 끄신 상태 유지 */
  scroll-behavior: smooth; /* 부드럽게 */
  scroll-padding-top: var(--nav-h); /* anchor 보정 */
}

/* 섹션들이 네브바에 안 가리도록 여백 보정 */
#hero,
#portfolio,
#skills,
#footer {
  scroll-margin-top: var(--nav-h);
}

a {
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-bottom 0.2s ease;
  border-bottom: 1px solid transparent; /* hover 시 밑줄 효과 */
  padding-bottom: 2px;
}

a:hover {
  color: var(--primary-dark); /* hover 시 더 진한 초록 */
  border-bottom: 1px solid var(--primary-dark);
}

a:active {
  color: var(--primary-dark);
  opacity: 0.9; /* 눌렀을 때 살짝 진해짐 */
}

a:visited {
  color: var(--primary); /* visited도 동일 색상으로 */
}

hr {
  margin-top: 1.5px;
  margin-bottom: 1.5px;
}

/* 스냅 루트: 세로 스크롤 스냅 컨테이너 */
.snap-root {
  height: 100dvh; /* 모바일 안전한 뷰포트 단위 */
  overflow-y: auto;

  scroll-padding-top: var(--header-h, 64px);
}

/* 개별 섹션: 화면을 가득, 시작점에 스냅 */
.snap-section {
  min-height: 100dvh; /* 각 섹션이 화면을 꽉 채움 */
  scroll-snap-align: start; /* 섹션 시작 지점에 정렬 */
  display: flex; /* 중앙 정렬을 위한 flex */
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
}

/* 포커스 이동/탭 이동 시도 자연스럽게 */
.snap-section:focus {
  outline: none;
}

/* 푸터도 스냅 대상이면 아래 클래스 추가 */
.snap-footer {
  scroll-snap-align: start;
}
.section--hero {
  background: var(--bg-dark);
  color: var(--text-main);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 좌/우 두 영역 */
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

/* 왼쪽 텍스트 */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}

/* 오른쪽 이미지 영역 */
.hero-right {
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-items: flex-end; /* 하단 정렬 */
}

.hero-dot-image {
  width: 85%;
  max-width: 450px;
  height: auto;
  object-fit: contain;
  image-rendering: pixelated; /* 도트감 유지 */
  opacity: 0.7; /* 은은하게 */
}

/* 반응형 - 모바일에서는 세로 스택 */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr; /* 한 줄로 */
  }
  .hero-left {
    text-align: center;
    align-items: center;
  }
  .hero-right {
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .hero-dot-image {
    width: 60%;
    max-width: 300px;
    opacity: 0.6; /* 더 은은하게 */
  }
}
.section--works {
  background: var(--bg-alt);
  color: var(--text-main);
}

.section--skills {
  background: var(--bg-dark);
  color: var(--text-main);
}

.footer--area {
  background: var(--bg-alt);
  border-top: 1px solid var(--border-dark);
  color: var(--text-muted);
}

/* 큰 제목 hover 시 아주 은은한 네온 */
/* 제목 hover도 animation 대신 transition */
.hero-title {
  transition: text-shadow 0.3s ease;
}
.hero-title:hover {
  border: 1px;
  border-color: green;
  text-shadow: 0 0 10px rgba(0, 255, 132, 0.7);
}

/* 버튼/링크에 초록 포인트 */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border: 1px solid var(--primary);
  border-radius: 10px;
  background: transparent;
  color: var(--primary);
  cursor: pointer;
  font-weight: 600;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}
.btn:hover {
  background: var(--primary);
  color: var(--bg-dark);
}

/* 접근성: 모션 선호하지 않는 사용자에겐 스냅 완화 */
@media (prefers-reduced-motion: reduce) {
  .snap-root {
    scroll-behavior: auto;
    scroll-snap-type: y proximity; /* 강제 스냅 대신 느슨하게 */
  }
}

.title {
  margin: 0 0 12px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.hero-title {
  margin: 0 0 20px;
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.5;
  transition: text-shadow 0.3s ease;
}

.Portfolio-title {
  margin: 0 0 20px;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.5;
  transition: text-shadow 0.3s ease;
}

.hero-title:hover {
  text-shadow: 0 0 10px rgba(0, 255, 132, 0.7);
}

.hero-title-explain {
  font-size: 2rem;
  font-weight: 300;
}

.desc {
  margin: 1px;
  color: var(--muted);
  font-size: clamp(14px, 1.7vw, 18px);
}

.icon {
  width: 20px;
  height: 20px;
  margin: 5px;
}

.desc-container {
  display: flex;
  margin-top: 1ppx;
  gap: 10px;
}

/* ========== Hero 애니메이션 ========== */

/* 1) 위로 살짝 떠오르면서(fade-up) 등장 */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 2) 라인(hr) 길이가 왼→오른쪽으로 자라나는 효과 */
@keyframes growX {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

/* 3) 약한 네온 글로우(hover 시 강조) */
@keyframes softGlow {
  0% {
    text-shadow: 0 0 0 rgba(0, 255, 132, 0);
  }
  100% {
    text-shadow: 0 0 8px rgba(0, 255, 132, 0.35);
  }
}

/* 등장 순서: h1 → h2 → hr → 링크들 → 이메일 */
.section--hero .hero-title {
  animation: fadeUp 620ms cubic-bezier(0.2, 0.6, 0.2, 1) 50ms both;
}

.section--hero .hero-title-explain {
  color: var(--text-muted);
  font-weight: 600;
  animation: fadeUp 620ms cubic-bezier(0.2, 0.6, 0.2, 1) 180ms both;
  will-change: transform, opacity;
}

/* hr을 얇은 초록 포인트 바처럼 */
.section--hero hr {
  width: 164px; /* 최종 너비 */
  height: 2px;
  border: 0;
  background: var(--primary);
  transform-origin: left center;
  margin: 16px 0 18px;
  animation: growX 520ms cubic-bezier(0.2, 0.6, 0.2, 1) 280ms both;
}

/* 링크 컨테이너(왼→오 스택에 자연스러운 간격) */
.section--hero .desc-container {
  display: flex;
  gap: 18px;
  margin-bottom: 8px;
}

/* 각 desc 항목을 단계적으로 페이드업 */
.section--hero .desc-container .desc:nth-child(1) {
  animation: fadeUp 520ms cubic-bezier(0.2, 0.6, 0.2, 1) 380ms both;
}
.section--hero .desc-container .desc:nth-child(2) {
  animation: fadeUp 520ms cubic-bezier(0.2, 0.6, 0.2, 1) 460ms both;
}

/* 이메일 라인도 늦게 등장 */
.section--hero .desc:last-of-type {
  animation: fadeUp 520ms cubic-bezier(0.2, 0.6, 0.2, 1) 540ms both;
}

/* 링크: 기본은 초록, hover 시 글로우 + 밑줄 그로우 */
.section--hero a {
  position: relative;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}
.section--hero a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.22s ease;
  opacity: 0.9;
}
.section--hero a:hover {
  color: var(--primary-dark);
  animation: softGlow 280ms ease-out forwards;
}
.section--hero a:hover::after {
  transform: scaleX(1);
}

/* 모션 민감 사용자 배려 */
@media (prefers-reduced-motion: reduce) {
  .section--hero .hero-title,
  .section--hero .hero-title-explain,
  .section--hero hr,
  .section--hero .desc,
  .section--hero a,
  .section--hero .desc-container .desc {
    animation: none !important;
  }
}

/* 그리드 + 세로 구분선 */
.portfolio-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 최대 2개/줄 */
  column-gap: 40px;
  row-gap: 24px;
  padding-block: 8px;
  margin: 30px;
}

/* 가운데 세로 구분선 (두 컬럼 사이) */
.portfolio-grid::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1.5px;
  transform: translateX(-0.5px);
  background: var(--border-dark);
  opacity: 0.6;
  pointer-events: none;
}

/* 카드 */
.p-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-dark);
  border: 2px solid var(--border-dark);
  border-radius: 12px;
  padding: 16px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

/* 호버: 살짝 떠오르고, 보더/그린 포인트 강조 */
.p-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow:
    0 12px 22px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(0, 255, 132, 0.15) inset,
    0 10px 24px rgba(0, 255, 132, 0.08);
  background: #0c0c0c;
}

/* 썸네일(옵션) */
.p-thumb {
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #0f0f0f;
  border: 1px solid var(--border-dark);
  margin-bottom: 12px;
}
.p-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: auto;
}

/* 텍스트들 */
.p-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 2px 0 6px;
  color: var(--text-main);
}
.p-desc {
  color: var(--text-muted);
  margin: 0 0 10px;
  line-height: 1.5;
}

/* 태그/링크 */
.p-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.p-tag {
  font-size: 0.75rem;
  padding: 4px 8px;
  border: 1px solid var(--border-dark);
  border-radius: 999px;
  color: var(--text-muted);
}
.p-card:hover .p-tag {
  border-color: rgba(0, 255, 132, 0.35);
}

.p-actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}
.p-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}
.p-link::after {
  content: '↗';
  margin-left: 6px;
}
.p-link:hover {
  color: var(--primary-dark);
  border-bottom-color: var(--primary-dark);
}

/* 반응형: 1열로 변경 + 구분선 숨김 */
@media (max-width: 900px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
  .portfolio-grid::before {
    display: none;
  }
}

/* 공통: 리빌 초기 상태 */
[data-reveal] {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.6s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
  will-change: opacity, transform;
}

/* 표시 상태 */
[data-reveal].in {
  opacity: 1;
  transform: none;
}

/* 카드 개별 지연(0, 80ms, 160ms ...) */
.p-card {
  transition-delay: calc(var(--i, 0) * 80ms);
}

/* 섹션 타이틀/그리드도 살짝 늦게 */
.section--works .title {
  transition-delay: 40ms;
}
.section--works[data-reveal].in {
  transition-delay: 0ms;
}

/* 모션 민감 사용자 배려 */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
