<template>
  <section id="benefits">
    <desktop v-if="!isMobile" />
    <mobile v-else />
  </section>
</template>

<script setup>
  import desktop from "./components/desktop.vue";
  import mobile from "./components/mobile.vue";

  import { ref, onMounted, onUnmounted } from "vue";

  const isMobile = ref(false);

  const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
  });
</script>
