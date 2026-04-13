<style src="../style/desktop.css"></style>
<template>
  <section class="accordation-showCase-desktop container-global">
    <div class="options">
      <div
        class="option2 active"
        style="
          --optionBackground: url(&quot;/assets/accordionShowCase/slide-1-bg.jpg&quot;);
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-h3">Precision Dosing</div>
            <div class="sub text-p">
              Effortless accuracy. Consistent 10–15g doses with every slide.
            </div>
          </div>
        </div>
      </div>
      <div
        class="option2"
        style="
          --optionBackground: url(&quot;/assets/accordionShowCase/slide-2-bg.jpg&quot;);
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-h3">Instant Prep</div>
            <div class="sub text-p">
              Ready in under 5 seconds. From counter to shaker in one smooth
              motion
            </div>
          </div>
        </div>
      </div>
      <div
        class="option2"
        style="
          --optionBackground: url(&quot;/assets/accordionShowCase/slide-3-bg.jpg&quot;);
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-h3">Universal Fit</div>
            <div class="sub text-p">
              Designed to work with any shaker size or brand.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let currentIndex = 0;
let interval;
let options = [];

// 🎯 Set active slide by index
function setActive(index) {
  options.forEach((el) => el.classList.remove("active"));
  options[index].classList.add("active");
  currentIndex = index;
}

// ➡️ Advance to next slide
function nextOption() {
  let nextIndex = (currentIndex + 1) % options.length;
  setActive(nextIndex);
}

// ▶️ Initialize autoplay
function startAutoPlay() {
  interval = setInterval(nextOption, 6000);
}

// 🔄 Restart autoplay timer
function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

onMounted(() => {
  options = document.querySelectorAll(".option2");

  // 👆 On manual user interaction
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      setActive(index);
      resetAutoPlay();
    });
  });

  // startAutoPlay();
});

  // 🔥 Cleanup listeners & timers to prevent memory leaks
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
</script>
