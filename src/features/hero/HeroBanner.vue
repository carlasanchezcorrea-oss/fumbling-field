<script setup>
// import Form from "./components/FormNewsletter.vue";
import Form from "./components/ButtonsKickstarter.vue";
</script>

<template>
  <section class="heroBanner container-global">
    <div class="heroBanner_item-bg">
      <img src="/assets/heroBanner/item-product.png" alt="" />
    </div>
    <div class="container-global_box">
      <div class="hero-content">
        <h1 class="text-title">
          The new standard <br />
          in protein prep
        </h1>

        <p class="subtitle text-description">
          <strong class="text-main">Fast. Clean. Consistent.</strong> Precision
          in one smooth motion.
        </p>

        <Form />
      </div>
    </div>
  </section>
</template>

<style src="./heroBanner.css"></style>

<style scoped>
/* ========================= */
/* 📱 MOBILE */
/* ========================= */

@media (max-width: 768px) {
  .heroBanner {
    height: 100%;
    /* =======v1=========== */
    /* min-height: 0px; * (no exist) / 
    /* ==================== */

    /* =======v2: 12/May ======= */
    min-height: 0px;
    /* ========================= */
    padding-top: 100px;
    align-items: flex-start;
    justify-content: center;
    background-image: url("/assets/heroBanner/hero-product-mobile.jpg");
    background-size: cover;
    background-position: center bottom;
  }
  .heroBanner .heroBanner_item-bg {
    display: none;
  }

  .heroBanner .hero-content {
    width: 100%;
    max-width: 100%;
  }

  .heroBanner h1 {
    font-size: 36px;
  }

  .heroBanner .subtitle {
    font-size: 14px;
  }

  .heroBanner .modal {
    border-radius: 12px;
  }

  .heroBanner .close {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style>
