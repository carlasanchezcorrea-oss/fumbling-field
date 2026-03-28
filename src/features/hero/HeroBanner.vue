<script setup></script>

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

        <div class="form">
          <input
            type="email"
            placeholder="Enter your email"
            class="text-description"
          />
          <div class="buttons">
            <button class="primary text-main">Notify me</button>

            <button class="secondary text-main">
              <a
                href="https://youtu.be/Mc2qe9--yA4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="icon">
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.50896 15.994C1.3709 15.9812 1.20803 16.0125 1.07321 15.994C0.458406 15.9092 0.021572 15.2032 0 14.5727V1.45389C0.0852096 0.216094 1.17352 -0.369132 2.16691 0.247445C5.59795 2.39211 9.0937 4.43111 12.4945 6.62338C13.2798 7.37117 13.1072 8.44989 12.2734 9.04208L2.15613 15.7071L1.50896 15.9951V15.994ZM1.30619 14.5889L11.6964 7.73345C11.6964 7.69862 11.4159 7.5256 11.3685 7.49425C8.14992 5.3821 4.75664 3.5614 1.52946 1.4655L1.36659 1.39003L1.30619 1.42486V14.5901V14.5889Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Watch demo
              </a>
            </button>
          </div>
        </div>
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
    height: 100vh;
    min-height: 800px;
    padding-top: 100px;
    align-items: flex-start;
    justify-content: center;
    background-image: url("/assets/heroBanner/hero-product-mobile.jpg");
    background-size: cover;
    /* 🔥 importante para mobile */
    background-position: center bottom;
  }
  .heroBanner .heroBanner_item-bg {
    display: none;
  }

  .hero-content {
    width: 100%;
    max-width: 100%;
  }

  h1 {
    font-size: 36px;
  }

  .subtitle {
    font-size: 14px;
  }

  .buttons {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>
