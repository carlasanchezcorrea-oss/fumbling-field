<template>
  <section class="testimonials-swiper" id="testimonialshowCase">
    <div class="container">
      <!-- Swiper Carousel -->
      <div
        class="testimonials-swiper-container"
        ref="paginationTestimonio"
        :class="{ visible: isVisible.swiper }"
      >
        <Swiper
          :slides-per-view="1.05"
          :loop="true"
          :modules="modules"
          :space-between="0"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :breakpoints="{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          @swiper="
            (swiper) => {
              swiper.params.pagination.el = paginationTestimonio;
              swiper.pagination.init();
              swiper.pagination.update();
            }
          "
        >
          <!-- Card 1 -->
          <SwiperSlide>
            <div class="testimonials-swiper-card slide-swiper-03">
              <div class="info">
                <div class="quote-icon">
                  <svg
                    width="42"
                    height="33"
                    viewBox="0 0 42 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z"
                      fill="#2AB8FF"
                    />
                  </svg>
                </div>
                <div class="sub text-p">
                  I can really feel the effort that went into developing this
                  (...) It's reassuring to see how much research was done. I
                  can't wait for it to arrive!
                </div>
              </div>
              <div class="info-name">
                <img
                  src="/assets/testimonials/1.png"
                  alt=""
                  class="image-info-name"
                />
                <span class="author-name text-h3">nimonjiya</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 2 -->
          <SwiperSlide>
            <div class="testimonials-swiper-card slide-swiper-03">
              <div class="info">
                <div class="quote-icon">
                  <svg
                    width="42"
                    height="33"
                    viewBox="0 0 42 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z"
                      fill="#2AB8FF"
                    />
                  </svg>
                </div>
                <div class="sub text-p">
                  Thank you for creating such a great product. I can't wait to
                  make shakes without the usual stress. Rooting for you guys!
                </div>
              </div>
              <div class="info-name">
                <img
                  src="/assets/testimonials/2.png"
                  alt=""
                  class="image-info-name"
                />
                <span class="author-name text-h3">No-name</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 3 -->
          <SwiperSlide>
            <div class="testimonials-swiper-card slide-swiper-03">
              <div class="info">
                <div class="quote-icon">
                  <svg
                    width="42"
                    height="33"
                    viewBox="0 0 42 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9759 -6.10352e-05L12.1599 15.6159H17.2799V32.8959H-5.24521e-05V15.3599L4.60795 -6.10352e-05H14.9759ZM39.04 -6.10352e-05L36.2239 15.6159H41.3439V32.8959H24.0639V15.3599L28.6719 -6.10352e-05H39.04Z"
                      fill="#2AB8FF"
                    />
                  </svg>
                </div>
                <div class="sub text-p">
                  I always hated how protein powder would spill everywhere.
                  Can't wait for it to arrive!
                </div>
              </div>
              <div class="info-name">
                <img
                  src="/assets/testimonials/3.png"
                  alt=""
                  class="image-info-name"
                />
                <span class="author-name text-h3">j-wada</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- Pagination Dots -->
      <div ref="paginationTestimonio" class="swiper-pagination"></div>
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
const paginationTestimonio = ref(null);

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
        if (entry.target === headerRef.value) {
          isVisible.value.header = true;
        }
        if (entry.target === paginationTestimonio.value) {
          // Delay for Swiper
          setTimeout(() => {
            isVisible.value.swiper = true;
          }, 200);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (headerRef.value) observer.observe(headerRef.value);
  if (paginationTestimonio.value) observer.observe(paginationTestimonio.value);

  const setupPagination = (swiper, el) => {
    swiper.params.pagination.el = el;
    swiper.pagination.init();
    swiper.pagination.update();
  };
});
</script>

<style>
:root {
  --bg-color: #f8fafc;
  --text-main: #111827;
  --text-sub: #4b5563;
  --accent-blue: #2eaaff;
  --card-bg: #ffffff;
  --font-family: "Inter", system-ui, -apple-system, sans-serif;
}
/* .testimonials-swiper-card {
  width: 100%;
} */
.testimonials-swiper .container {
  display: flex;
  justify-content: center;
}
.testimonials-swiper-container {
  width: 100%;
  overflow: hidden;
}
/* Swiper Pagination Customization */
.testimonials-swiper-container .swiper-pagination {
  bottom: 0rem;
}
.testimonials-swiper-container .swiper-pagination-bullet {
  width: 1.5rem;
  height: 1.5rem;
}
:deep(.testimonials-swiper-container .swiper-wrapper) {
  display: flex;
  /* justify-content: center; */
  align-items: stretch;
}

.testimonials-swiper-container .swiper-slide {
  width: auto !important;
  background-color: #fff;
  /* max-width: 25rem; */
  height: auto;
  padding: 2rem 2.5rem;
  border-radius: 2.4rem;
  box-shadow: 2px 4px 24px 0 rgba(0, 0, 0, 0.1);
}
.testimonials-swiper-container .swiper-wrapper {
  display: flex;
  justify-content: center;
}
.testimonials-swiper-container .swiper-wrapper .swiper-slide:nth-child(3) {
  margin: 0 !important;
}
.testimonials-swiper-container .swiper-wrapper .testimonials-swiper-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.testimonials-swiper-container
  .swiper-wrapper
  .testimonials-swiper-card
  .info-name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.5rem;
}
.testimonials-swiper-container
  .swiper-wrapper
  .testimonials-swiper-card
  .sub.text-p {
  text-align: center;
  font-size: 1.6rem;
  width: 30rem;
}
.testimonials-swiper-container
  .swiper-wrapper
  .testimonials-swiper-card
  .quote-icon {
  text-align: center;
  padding-bottom: 1rem;
}
.testimonials-swiper-container
  .swiper-wrapper
  .testimonials-swiper-card
  .author-name.text-h3 {
  text-align: center;
  color: #2d83c0;
  font-size: 1.6rem;
}

.testimonials-swiper-container
  .swiper.swiper-initialized.swiper-horizontal.swiper-backface-hidden {
  padding: 2rem 0 4rem;
}
@media (min-width: 1024px) and (max-width: 1260px) {
  .testimonials-swiper-container {
    width: 65rem;
  }
}
</style>
