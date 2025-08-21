<template>
  <!-- 한 화면씩 스크롤 스냅되는 컨테이너 -->
  <div class="snap-root">
    <!-- 1. Hero -->
    <section class="snap-section section--hero" tabindex="0" aria-label="Hero">
      <div class="container">
        <h1 class="hero-title">Jung Tae Seung</h1>
        <h2 class="hero-title-explain">신나는 걸 만들고 픈 개발자 </h2>
        <hr></hr>
        <div class="desc-container">
          <p class ="desc"><a href="#">Github</a></p>
          <p class= "desc"><a href="#">Notion</a></p>
        </div>
          <p class="desc">email : etanolfly98@gmail.com</p>
      </div>
    </section>

    <!-- 2. Portfolio -->
    <section class="snap-section section--works" tabindex="0" aria-label="Portfolio">
      <div class="container">
        <h1 class="title">여기는 포트폴리오 섹션입니다</h1>
        <p class="desc">프로젝트 카드들이 들어갈 자리</p>
      </div>
    </section>

    <!-- 3. Awards & Skills -->
    <section class="snap-section section--skills" tabindex="0" aria-label="Awards and Skills">
      <div class="container">
        <h1 class="title">수상경험 및 기술 스택</h1>
        <p class="desc">뱃지/아이콘/연표 등으로 구성</p>
      </div>
    </section>

    <!-- Footer (스냅 포함/미포함 선택 가능) -->
    <footer class="footer--area snap-footer">
      <div class="container" style="padding: 28px 0; color: var(--muted); text-align:center;">
        여기는 footer입니다.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>


<style>
:root {
  --bg-dark: #0a0a0a;          /* 메인 배경 */
  --bg-alt: #111111;           /* 섹션 구분용 */
  --text-main: #e5e7eb;        /* 기본 텍스트 */
  --text-muted: #9ca3af;       /* 보조 텍스트 */
  --primary: #00ff84;          /* 포인트 그린 */
  --primary-dark: #00cc66;     /* hover 시 딥 그린 */
  --border-dark: #1f2937;      /* 보더 */
}
</style>

<style scoped>

a {
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, border-bottom 0.2s ease;
  border-bottom: 1px solid transparent; /* hover 시 밑줄 효과 */
  padding-bottom: 2px;
}

a:hover {
  color: var(--primary-dark);             /* hover 시 더 진한 초록 */
  border-bottom: 1px solid var(--primary-dark);
}

a:active {
  color: var(--primary-dark);
  opacity: 0.9; /* 눌렀을 때 살짝 진해짐 */
}

a:visited {
  color: var(--primary); /* visited도 동일 색상으로 */
}

hr{
  margin-top : 1.5px;
  margin-bottom : 1.5px;
}

/* 스냅 루트: 세로 스크롤 스냅 컨테이너 */
.snap-root {
  height: 100dvh;                 /* 모바일 안전한 뷰포트 단위 */
  overflow-y: auto;
  scroll-snap-type: y mandatory;  /* 한 섹션씩 '탁' 하고 붙게 */
  scroll-behavior: smooth;       /* 부드러운 스크롤 */
  scroll-padding-top: var(--header-h, 64px);
}

/* 개별 섹션: 화면을 가득, 시작점에 스냅 */
.snap-section {
  min-height: 100dvh;             /* 각 섹션이 화면을 꽉 채움 */
  scroll-snap-align: start;       /* 섹션 시작 지점에 정렬 */
  display: flex;                  /* 중앙 정렬을 위한 flex */
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
  transition: background 0.2s ease, color 0.2s ease;
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
  font-size: clamp(30px, 8vw, 50px);
  line-height: 1.2;
}

.hero-title {
  margin: 0 0 20px;
  font-size: 5rem;
  font-weight : 700;
  line-height: 1.5;
}

.hero-title-explain{
  font-size: 2rem;
  font-weight : 300;
}

.desc {
  margin: 1px;
  color: var(--muted);
  font-size: clamp(14px, 1.7vw, 18px);
}

.desc-container{
  display:flex;
  margin-top: 1ppx;
  gap : 10px;
}
</style>