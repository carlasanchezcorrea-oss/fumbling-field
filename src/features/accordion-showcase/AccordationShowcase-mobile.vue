<template>
  <section class="accordation-showCase-mobile" id="accordationshowCase">
    <div class="container">
      <!-- Swiper Carousel -->
      <div
        class="accordation-swiper-container"
        ref="paginationEl"
        :class="{ visible: isVisible.swiper }"
      >
        <Swiper
          :slides-per-view="1.05"
          :loop="true"
          :modules="modules"
          :pagination="{ clickable: true }"
          @swiper="
            (swiper) => {
              swiper.params.pagination.el = paginationEl;
              swiper.pagination.init();
              swiper.pagination.update();
            }
          "
        >
          <!-- Card 1 -->
          <SwiperSlide>
            <div class="accordation-showCase-mobile-card slide-swiper-01">
              <div class="info">
                <div class="main-title text-main">Precision Dosing</div>
                <div class="sub text-p">
                  Effortless accuracy.
                  <br />
                  Consistent 10–15g doses with every slide.
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </SwiperSlide>

          <!-- Card 2 -->
          <SwiperSlide>
            <div class="accordation-showCase-mobile-card slide-swiper-02">
              <div class="info">
                <div class="main-title text-main">Instant Prep</div>
                <div class="sub text-p">
                  Ready in under 5 seconds. From counter to shaker in one smooth
                  motion
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </SwiperSlide>

          <!-- Card 3 -->
          <SwiperSlide>
            <div class="accordation-showCase-mobile-card slide-swiper-03">
              <div class="info">
                <div class="main-title text-main">Universal Fit</div>
                <div class="sub text-p">
                  Designed to work with any shaker size or brand.
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Pagination Dots -->
        <div ref="paginationEl" class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import modules
const modules = [Pagination, Autoplay];

// Refs
const headerRef = ref(null);
const paginationEl = ref(null);

// Visibility state
const isVisible = ref({
  header: false,
  swiper: false,
});

onMounted(() => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Determinar qué elemento es
        if (entry.target === headerRef.value) {
          isVisible.value.header = true;
        }
        if (entry.target === paginationEl.value) {
          // Pequeño delay para el swiper
          setTimeout(() => {
            isVisible.value.swiper = true;
          }, 200);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos
  if (headerRef.value) observer.observe(headerRef.value);
  if (paginationEl.value) observer.observe(paginationEl.value);

  const setupPagination = (swiper, el) => {
    swiper.params.pagination.el = el;
    swiper.pagination.init();
    swiper.pagination.update();
  };
});
</script>

<style scoped>
:root {
  --bg-color: #f8fafc;
  --text-main: #111827;
  --text-sub: #4b5563;
  --accent-blue: #2eaaff;
  --card-bg: #ffffff;
  --font-family: "Inter", system-ui, -apple-system, sans-serif;
}

.accordation-showCase-mobile {
  height: 100vh;
  background-color: #f8fafc;
  padding: 50px 0px 0 20px;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  overflow: hidden;
}

.accordation-showCase-mobile .container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

/* --- Header Styles --- */
.accordation-showCase-mobile .header-content {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.accordation-showCase-mobile .header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.accordation-showCase-mobile .info {
  text-align: left;
  color: #fff;
  position: relative;
  /* top: 35%;
  left: 11%; */
  z-index: 50;
  margin: auto;
}
.accordation-showCase-mobile .main-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.accordation-showCase-mobile .sub {
  font-size: 20px;
  font-weight: 400;
}

.accordation-showCase-mobile .subtitle strong {
  font-weight: 700;
  color: #111827;
}

/* --- Swiper Container --- */
.accordation-showCase-mobile .accordation-swiper-container {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.accordation-showCase-mobile .accordation-swiper-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.accordation-showCase-mobile .mySwiper {
  width: 100%;
  padding-bottom: 3rem !important;
}

.accordation-showCase-mobile .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
}

.accordation-showCase-mobile .accordation-showCase-mobile-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  text-align: center;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  height: 100%;
}

.accordation-showCase-mobile .accordation-showCase-mobile-card:hover {
  transform: translateY(-5px);
}

.accordation-showCase-mobile .quote-icon {
  margin-bottom: 0.5rem;
}

.accordation-showCase-mobile .accordation-showCase-mobile-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
  font-weight: 400;
}

.accordation-showCase-mobile .author-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2eaaff;
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

/* Swiper Pagination Customization */
:deep(.accordation-swiper-container .swiper-pagination) {
  bottom: 20px;
}

:deep(.accordation-swiper-container .swiper-pagination-bullet) {
  background: #e5e7eb;
  opacity: 1;
  width: 10px;
  height: 10px;
  transition: all 0.3s ease;
}

:deep(.accordation-swiper-container .swiper-pagination-bullet-active) {
  background: #2eaaff;
  width: 24px;
  border-radius: 5px;
}

/* --- Responsive: Desktop (1440px) --- */
@media (min-width: 1024px) {
  .accordation-showCase-mobile {
    padding: 8rem 2rem;
  }

  .accordation-showCase-mobile .header-content {
    margin-bottom: 5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .accordation-showCase-mobile .main-title {
    font-size: 3.5rem;
  }

  .accordation-showCase-mobile .subtitle {
    font-size: 1.25rem;
  }

  .accordation-showCase-mobile .accordation-showCase-mobile-card {
    padding: 3rem;
    max-width: 420px;
  }

  .accordation-showCase-mobile .accordation-showCase-mobile-text {
    font-size: 1.125rem;
  }
}
.accordation-showCase-mobile .slide-swiper-01 {
  background-image: url(/public/assets/accordionShowCase/slide-1-bg.jpg);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 250%;
}
.accordation-showCase-mobile .slide-swiper-02 {
  background-image: url(/public/assets/accordionShowCase/slide-2-bg.jpg);
  background-size: cover;
  background-position: center;
  background-position-x: 28%;
  background-repeat: no-repeat;
  background-size: 220%;
}
.accordation-showCase-mobile .slide-swiper-03 {
  background-image: url(/public/assets/accordionShowCase/slide-3-bg.jpg);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 230%;
}
.accordation-showCase-mobile .accordation-showCase-mobile-card {
  position: relative;
}
.accordation-showCase-mobile-card .overlay {
  border-radius: 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
/* --- Responsive: Mobile (390px) --- */
@media (max-width: 480px) {
  .accordation-showCase-mobile {
    /* padding: 3rem 1rem; */
  }

  .main-title {
    font-size: 2rem;
  }

  .accordation-showCase-mobile .accordation-showCase-mobile-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    width: 100%;
    height: 90%;
    margin: 0 auto;
  }

  .accordation-showCase-mobile .swiper-slide {
    padding: 0 10px;
    height: 90vh;
  }
}
</style>
