<template>
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <!-- Header Section -->
      <div
        class="header-content"
        ref="headerRef"
        :class="{ visible: isVisible.header }"
      >
        <h2 class="main-title">Validated by real routines.</h2>
        <p class="subtitle">
          Already trusted in Japan. <strong>Now coming to the U.S.</strong>
        </p>
      </div>

      <!-- Swiper Carousel -->
      <div
        class="swiper-container"
        ref="swiperRef"
        :class="{ visible: isVisible.swiper }"
      >
        <Swiper
          :modules="modules"
          :slides-per-view="1.05"
          :space-between="0"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          @swiper="
            (swiper) => {
              swiper.params.pagination.el = paginationRef.value;
              swiper.pagination.init();
              swiper.pagination.update();
            }
          "
        >
          <!-- Card 1 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z" fill="#2AB8FF"/>
                </svg>
              </div>
              <p class="testimonial-text">
                I can really feel the effort that went into developing this
                (...) It's reassuring to see how much research was done. I can't
                wait for it to arrive!
              </p>
              <span class="author-name">nimonjiya</span>
            </div>
          </SwiperSlide>

          <!-- Card 2 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z" fill="#2AB8FF"/>
                </svg>
              </div>
              <p class="testimonial-text">
                Thank you for creating such a great product. I can't wait to
                make shakes without the usual stress. Rooting for you guys!
              </p>
              <span class="author-name">No-name</span>
            </div>
          </SwiperSlide>

          <!-- Card 3 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z" fill="#2AB8FF"/>
                </svg>
              </div>
              <p class="testimonial-text">
                I always hated how protein powder would spill everywhere. Can't
                wait for it to arrive!
              </p>
              <span class="author-name">j-wada</span>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Pagination Dots -->
        <div ref="paginationRef" class="swiper-pagination"></div>
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
const swiperRef = ref(null);
const paginationRef = ref(null);

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
        if (entry.target === paginationRef.value) {
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
  if (paginationRef.value) observer.observe(paginationRef.value);
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

.testimonials-section {
  height: auto;
  background-color: #f8fafc;
  padding: 5rem 0rem 0 1.5rem;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  overflow: hidden;
}

.testimonials-section .container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: auto;
}

/* --- Header Styles --- */
.testimonials-section .header-content {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.testimonials-section .header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.testimonials-section .main-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.testimonials-section .subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  font-weight: 400;
}

.testimonials-section .subtitle strong {
  font-weight: 700;
  color: #111827;
}

/* --- Swiper Container --- */
.testimonials-section .swiper-container {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
  height: auto;
}

.testimonials-section .swiper {
  height: 100%;
}

.testimonials-section .swiper-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.testimonials-section .mySwiper {
  width: 100%;
  padding-bottom: 3rem !important;
}

.testimonials-section .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
}

.testimonials-section .testimonial-card {
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
  justify-content: space-between;
}

.testimonials-section .testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonials-section .quote-icon {
  margin-bottom: 0.5rem;
}

.testimonials-section .testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
  font-weight: 400;
}

.testimonials-section .author-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2eaaff;
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

/* Swiper Pagination Customization */
:deep(.testimonials-section .swiper-pagination-bullet) {
  background: #e5e7eb;
  opacity: 1;
  width: 10px;
  height: 10px;
  transition: all 0.3s ease;
}

:deep(.testimonials-section .swiper-pagination-bullet-active) {
  background: #2eaaff;
  width: 24px;
  border-radius: 5px;
}

/* --- Responsive: Desktop (1440px) --- */
@media (min-width: 1024px) {
  .testimonials-section {
    padding: 8rem 2rem;
  }

  .testimonials-section .header-content {
    margin-bottom: 5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .testimonials-section .main-title {
    font-size: 3.5rem;
  }

  .testimonials-section .subtitle {
    font-size: 1.25rem;
  }

  .testimonials-section .testimonial-card {
    padding: 3rem;
    max-width: 420px;
  }

  .testimonials-section .testimonial-text {
    font-size: 1.125rem;
  }
}

/* --- Responsive: Mobile (390px) --- */
@media (max-width: 480px) {

  .testimonials-section .main-title {
    font-size: 2rem;
  }

  .testimonials-section .testimonial-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    width: 100%;
    margin: 0 auto;
  }

  .testimonials-section .swiper-slide {
    padding: 0 10px;
  }
}
/* --- Responsive: Mobile (768px) --- */
@media (max-width: 768px) {
  .testimonials-section {
    height: 90vh;
  }
  .testimonials-section .container {
    height: 70vh;
  }
  /* --- Swiper Container --- */
  .testimonials-section .swiper-container {
    height: 50vh;
  }

  .testimonials-section .testimonial-card {
    height: 80%;
  }
}
</style>
