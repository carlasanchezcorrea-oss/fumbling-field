<script setup></script>

<template>
  <section class="hero container-global">
    <div class="hero-content">
      <h1 class="text-title">
        The new standard <br />
        in protein prep
      </h1>

      <p class="subtitle text-description">
        <strong class="text-main">Fast. Clean. Consistent.</strong> Precision in one smooth
        motion.
      </p>

      <div class="form">
        <input type="email" placeholder="Enter your email" class="text-description">
        <div class="buttons">
          <button class="primary text-main">Notify me</button>

          <button class="secondary text-main">
            <a
              href="https://youtu.be/Mc2qe9--yA4" target="_blank" rel="noopener noreferrer"
            >
              ▶ Watch demo
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO BASE */
.hero {
  /* width: 100%; */
  height: 100dvh;
  min-height: 700px;

  display: flex;
  align-items: center;

  background-image: url("/assets/heroBanner/hero-product-desktop.jpg");
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
}

/* CONTENIDO */
.hero-content {
  max-width: 620px;
}

/* TITULO */
h1 {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #000;
}

/* SUBTITULO */
.subtitle {
  font-size: 18px;
  color: #000;
  margin-bottom: 30px;
}

/* FORM */
.form input {
  width: stretch;
  padding: 14px 16px;
  border-radius: 10px;
  border: none;
  margin-bottom: 15px;
  background: #eee;
}

/* BOTONES */
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-family: "RalewayExtraBold";

}

button.primary,
button a {
  width: stretch;
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
}

a {
  display: flex;
  justify-content: center;
  color: inherit;
  list-style: none;
  text-decoration: none;
  background: transparent;
  border: 1px solid #999;
}

/* PRIMARY */
.primary {
  background: black;
  color: white;
  border: none;
}

/* SECONDARY */
.secondary {
  width: stretch;
  padding: 0;
  border: none;
  background: transparent;
}

/* ========================= */
/* 📱 MOBILE */
/* ========================= */

@media (max-width: 768px) {
  .hero {
    height: 100vh;
    min-height: 800px;
    padding-top: 100px;
    align-items: flex-start;
    justify-content: center;
    background-image: url("/assets/heroBanner/hero-product-mobile.jpg");

    /* 🔥 importante para mobile */
    background-position: center bottom;
  }

  .hero-content {
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
