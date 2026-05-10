<script setup lang="ts">
import { useHeroBanner } from "../heroBanner";

const { isModalOpen, openModal, closeModal, kickstarterRedirect } =
  useHeroBanner();
</script>

<template>
  <div class="form">
    <form data-form="hero_banner_form">
      <div class="buttons">
        <a
          class="button-primary"
          href="https://www.kickstarter.com/projects/miaomada/dp-m2-us-edition-precise-protein-zero-mess?ref=1xvzht"
          target="_blank"
        >
          <div class="primary text-main" @click="kickstarterRedirect">
            Get it on Kickstarter
          </div>
        </a>
        <button type="button" class="secondary text-main" @click="openModal">
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
        </button>
      </div>
    </form>
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <button class="close" @click="closeModal">✕</button>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Mc2qe9--yA4"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
          "
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* PRIMARY */
.heroBanner .button-primary {
  background: black;
  color: white;
  text-decoration: none;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 0.1rem solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
/* ========================= */
/* 📱 MOBILE */
/* ========================= */
@media (max-width: 768px) {
  .heroBanner .buttons {
    flex-direction: column;
  }

  .heroBanner button {
    width: 100%;
  }
}
</style>
