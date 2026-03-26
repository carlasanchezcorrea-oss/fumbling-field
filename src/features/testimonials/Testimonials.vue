<template>
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <!-- Header Section -->
      <div
        class="header-content"
        ref="headerRef"
        :class="{ visible: isVisible.header }"
      >
        <h2 class="main-title text-h3">Validated by real routines.</h2>
        <p class="subtitle text-p">
          Already trusted in Japan. <strong>Now coming to the U.S.</strong>
        </p>
      </div>
      <!-- Swiper Carousel -->
      <SwiperCarousel />

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import SwiperCarousel from "./Swiper-carousel.vue";

// Import modules
const headerRef = ref(null);

// Visibility state
const isVisible = ref({
  header: false,
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
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos
  if (headerRef.value) observer.observe(headerRef.value);
});
</script>

<style scoped>
:root {
  --bg-color: #f8fafc;
  --text-main: #111827;
  --accent-blue: #2eaaff;
  --card-bg: #ffffff;
}
.testimonials-section {
  background-color: #f6fcff;
  overflow: hidden;
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
}
.testimonials-section .header-content {
  padding: 2rem 1rem;
}
.testimonials-section .container {
  /* max-width: 1440px; */
  width: 100%;
  height: 100%;
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
.testimonials-section .swiper-slide {
}
  .testimonials-section .main-title {
    font-size: 3.5rem;
    margin-top: 0;
  }

  .testimonials-section .subtitle {
    font-size: 1.25rem;
  }
/* --- Responsive: Mobile (768px) --- */
@media (max-width: 768px) {
  .testimonials-section .header-content h2 {
    font-size: 3.6rem;
    text-align: left;
  }
  .testimonials-section .subtitle.text-p {
    font-size: 1.6rem;
    text-align: left;
  }
}
</style>
