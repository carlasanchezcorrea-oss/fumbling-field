<template>
  <section class="product-showcase"  id="quality">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1 class="title text-h3">Crafted for Everyday Precision.</h1>
        <div class="description text-p">
          <p>
            DP-M2 blends meticulous Japanese engineering with a minimalist,
            high-performance design, built to feel as solid as it looks.
            <br />
            This isn't just protein prep. It's a routine upgrade, designed to
            last for years.
          </p>
        </div>
      </div>

      <!-- Product Container -->
      <div class="product-wrapper">


          <!-- Hotspots interactivos -->
        <HotspotDesktop
          v-if="!isMobile"
          :hotspots="hotspots"
          @toggle="toggleHotspot"
        />

        <HotspotMobile
          v-else
          :hotspots="hotspots"
          @toggle="toggleHotspot"
        />

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import HotspotDesktop from './components/HotspotDesktop.vue'
import HotspotMobile from './components/HotspotMobile.vue'

const isMobile = ref(false)

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})

</script>

<style scoped>
/* Reset y variables */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-primary-button: #2ab8ff;
  --color-gray: #999999;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
}


.product-showcase {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.hotspot {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;

}

/* Header */
.header {
  text-align: center;
  padding: 0 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.description p {
  font-size: 1rem;
  color: #000;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
}

/* Product Wrapper */
.product-wrapper {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.product-image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1.3;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

/* Responsive - Desktop (1440px) */
@media (min-width: 1024px) {
  .product-showcase {
    padding: 4rem 2rem;
  }

  .header {
    text-align: left;
    padding: 2rem 0;
  }

  .product-showcase .title {
    font-size: 56px;
    margin-bottom: 24px;
    text-align: center;
  }

  .product-showcase .description p {
    font-size: 16px;
  }

  .product-wrapper {
    flex: 1;
    max-width: 600px;
    padding: 0;
  }

  .hotspot-button {
    width: 25px;
    height: 25px;
    font-size: 1.75rem;
  }
}

/* Responsive - Mobile (390px) */
@media (max-width: 480px) {
  .product-showcase .title {
    font-size: 36px;
    text-align: left;
  }

  .product-showcase .description p {
    font-size: 16px;
    text-align: left;
  }

  .product-image-container {
    max-width: 320px;
  }

  .hotspot-button {
    width: 25px;
    height: 25px;
    font-size: 1.25rem;
  }

  /* Ajustar posiciones para mobile si es necesario */
  @media (max-width: 400px) {
    .hotspot-button {
      width: 32px;
      height: 32px;
      font-size: 1.125rem;
    }
  }
}

/* Ajustes específicos para tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .title {
    font-size: 2.75rem;
  }

  .product-image-container {
    max-width: 400px;
  }

  .hotspot-button {
    width: 25px;
    height: 25px;
    font-size: 1.5rem;
  }
}

</style>
