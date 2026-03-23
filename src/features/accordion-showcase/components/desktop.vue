<template>
  <section class="accordation-showCase-desktop container-global">
    <div class="options">
      <div
        class="option2 active"
        style="
          --optionBackground: url('/assets/accordionShowCase/slide-1-bg.jpg');
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-main">Precision Dosing</div>
            <div class="sub text-p">
              Effortless accuracy. Consistent 10–15g doses with every slide.
            </div>
          </div>
        </div>
      </div>
      <div
        class="option2"
        style="
          --optionBackground: url('/assets/accordionShowCase/slide-2-bg.jpg');
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-main">Instant Prep</div>
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
          --optionBackground: url('/assets/accordionShowCase/slide-3-bg.jpg');
        "
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="info">
            <div class="main text-main">Universal Fit</div>
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

// función que activa un índice
function setActive(index) {
  options.forEach((el) => el.classList.remove("active"));
  options[index].classList.add("active");
  currentIndex = index;
}

// función para ir al siguiente
function nextOption() {
  let nextIndex = (currentIndex + 1) % options.length;
  setActive(nextIndex);
}

// iniciar autoplay
function startAutoPlay() {
  interval = setInterval(nextOption, 6000);
}

// reiniciar autoplay
function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

onMounted(() => {
  options = document.querySelectorAll(".option2");

  // click manual
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      setActive(index);
      resetAutoPlay();
    });
  });

  // startAutoPlay();
});

// 🔥 limpiar para evitar memory leaks
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style>
@import url(https://pro.fontawesome.com/releases/v5.11.2/css/all.css);
:root {
  --user-button-circle: rgba(0, 0, 0, 0.025);
  --user-button-cardborder: rgba(255, 255, 255, 0.25);
  --user-button-text: #323133;
  --user-button-shadow: rgba(0, 0, 0, 0.1);
}
body .options {
  display: none;
}

.accordation-showCase-desktop {
  padding-top: 58px;
  padding-bottom: 58px;
  display: flex;
  justify-content: center;
}

body #user-button {
  z-index: 1000;
  bottom: 1rem !important;
  right: 1rem !important;
  color: var(--user-button-text);
  transition: 1s 0s ease-out;
  -webkit-animation: slide 3s ease-out forwards;
  animation: slide 3s ease-out forwards;
}
@-webkit-keyframes slide {
  0%,
  50% {
    opacity: 0;
    display: block !important;
  }
  100% {
    opacity: 1;
    display: block !important;
  }
}
@keyframes slide {
  0%,
  50% {
    opacity: 0;
    display: block !important;
  }
  100% {
    opacity: 1;
    display: block !important;
  }
}
body #user-button .u-card {
  border-radius: 100%;
  box-shadow:
    0 0 1rem -0.25rem var(--user-button-shadow),
    inset 0 0 1rem -0.75rem var(--user-button-shadow);
}
body #user-button .u-main {
  cursor: pointer;
  --user-button-background: var(--user-button-main, #ec87c0);
}
body #user-button .u-main img {
  height: 100%;
  width: 100%;
}
body #user-button .u-main iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 4rem;
  height: 4rem;
  opacity: 0;
  transition: 0s 4s;
}
body #user-button .u-icons {
  position: relative;
  z-index: 950;
  transform: translate(-50%, -50%);
  background: var(--user-button-circle);
  box-shadow: 0 0 0 0.125rem var(--user-button-cardborder);
  border-radius: 100%;
  transition: 0.25s;
  opacity: 1 !important;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /*&:before {
     z-index:-1;
     position:absolute;
     top:0; right:0; bottom:0; left:0;
     content:'';

     backdrop-filter: blur(10px);
  }*/
}
body #user-button .u-icons a {
  color: inherit;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  text-decoration: none;
}
body #user-button .u-icons a div {
  padding: 0.5rem;
  transition: 0s;
}
body #user-button .u-icons a[href="https://twitter.com/zed_dash"] {
  position: relative;
}
body #user-button .u-icons a[href="https://twitter.com/zed_dash"]:before {
  content: "Middle Click";
  position: absolute;
  top: -1.5rem;
  left: 50%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  white-space: pre;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
  transition: 0.25s ease-in;
  background: #fffc;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
body #user-button .u-icons a[href="https://twitter.com/zed_dash"].show:before {
  opacity: 0;
  transition: 0.25s ease-out;
}
body #user-button .u-icons a[href="https://twitter.com/zed_dash"] div {
  color: #1da1f2;
}
body #user-button .u-icons a[href="https://codepen.io/z-"] div {
  background: black;
  color: white;
}
body #user-button .u-icons a.u-random div {
  position: relative;
  top: -1px;
  -webkit-animation: diespin 2s linear infinite;
  animation: diespin 2s linear infinite;
}
@-webkit-keyframes diespin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes diespin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body #user-button .u-icons a.u-random:not(:hover) div {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
body #user-button .u-icons > * {
  position: absolute;
  width: 30px;
  height: 30px;
  background: var(--singlecolour);
  border-radius: 100%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: 0.25s -0.05s;
}
body #user-button .u-icons > *:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
body #user-button .u-icons > *:hover,
body #user-button .u-icons > *:focus-within {
  background: var(--hcolour);
}
body #user-button .u-icons > *:first-child:nth-last-child(1):nth-child(1),
body #user-button .u-icons > *:first-child:nth-last-child(1) ~ *:nth-child(1) {
  left: 25%;
  top: 25%;
}
body #user-button .u-icons > *:first-child:nth-last-child(2):nth-child(1),
body #user-button .u-icons > *:first-child:nth-last-child(2) ~ *:nth-child(1) {
  left: 37.5%;
  top: 18.75%;
}
body #user-button .u-icons > *:first-child:nth-last-child(2):nth-child(2),
body #user-button .u-icons > *:first-child:nth-last-child(2) ~ *:nth-child(2) {
  left: 18.75%;
  top: 37.5%;
}
body #user-button .u-icons > *:first-child:nth-last-child(3):nth-child(1),
body #user-button .u-icons > *:first-child:nth-last-child(3) ~ *:nth-child(1) {
  left: 50%;
  top: 15.625%;
}
body #user-button .u-icons > *:first-child:nth-last-child(3):nth-child(2),
body #user-button .u-icons > *:first-child:nth-last-child(3) ~ *:nth-child(2) {
  left: 25%;
  top: 25%;
}
body #user-button .u-icons > *:first-child:nth-last-child(3):nth-child(3),
body #user-button .u-icons > *:first-child:nth-last-child(3) ~ *:nth-child(3) {
  left: 15.625%;
  top: 50%;
}
body #user-button .u-icons > *:first-child:nth-last-child(4):nth-child(1),
body #user-button .u-icons > *:first-child:nth-last-child(4) ~ *:nth-child(1) {
  left: 62.5%;
  top: 18.75%;
}
body #user-button .u-icons > *:first-child:nth-last-child(4):nth-child(2),
body #user-button .u-icons > *:first-child:nth-last-child(4) ~ *:nth-child(2) {
  left: 37.5%;
  top: 18.75%;
}
body #user-button .u-icons > *:first-child:nth-last-child(4):nth-child(3),
body #user-button .u-icons > *:first-child:nth-last-child(4) ~ *:nth-child(3) {
  left: 18.75%;
  top: 37.5%;
}
body #user-button .u-icons > *:first-child:nth-last-child(4):nth-child(4),
body #user-button .u-icons > *:first-child:nth-last-child(4) ~ *:nth-child(4) {
  left: 18.75%;
  top: 62.5%;
}
body #user-button:hover .u-icons,
body #user-button:focus-within .u-icons {
  width: 300% !important;
  height: 300% !important;
}

body .options {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);
  height: 400px;
  /* justify-content: center; */
}

body .options .option2 {
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: var(--optionBackground, var(--defaultBackground, #e6e9ed));
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  /* transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95); */
}
body .options .option2:nth-child(1) {
  --defaultBackground: #ed5565;
}
body .options .option2:nth-child(2) {
  --defaultBackground: #fc6e51;
}
body .options .option2:nth-child(3) {
  --defaultBackground: #ffce54;
}
body .options .option2:nth-child(4) {
  --defaultBackground: #2ecc71;
}
body .options .option2:nth-child(5) {
  --defaultBackground: #5d9cec;
}
body .options .option2:nth-child(6) {
  --defaultBackground: #ac92ec;
}
body .options .option2.active {
  flex-grow: 10000;
  transform: scale(1);
  max-width: 600px;
  margin: 0px;
  border-radius: 40px;
  background-size: auto 100%;
  /*&:active {
     transform:scale(0.9);
  }*/
}
body .options .option2.active .shadow {
  /* box-shadow:
      inset 0 -120px 120px -120px black,
      inset 0 -120px 120px -100px black; */

  box-shadow:
    inset 0 -77px 98px -134px black,
    inset 0 -153px 84px -116px black;
}
body .options .option2.active .label {
  bottom: 20px;
  left: 20px;
}
body .options .option2.active .label {
  left: 0px;
  opacity: 1;
}
body .options .option2:not(.active) {
  /* flex-grow: 1; */
  border-radius: 30px;
}

body .options .option2:not(.active) .shadow {
  /* bottom: -40px; */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
}
body .options .option2:not(.active) .label {
  bottom: 10px;
  left: 10px;
}
body .options .option2:not(.active) .label .icon,
body .options .option2:not(.active) .label .info .sub
 {
  left: 20px;
  opacity: 0;
}
body .options .option2 .shadow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100%;
  /* transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95); */
}
body .options .option2 .label {
  display: flex;
  position: absolute;
  right: 0px;
  height: 40px;
  /* transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95); */
}
body .options .option2 .label .icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  color: var(--defaultBackground);
}
body .options .option2 .label .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  margin-bottom: 30px;
  color: white;
  white-space: pre;
}
body .options .option2 .label .info > div {
  position: relative;
  /* transition:
    0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
    opacity 0.5s ease-out; */
}
body .options .option2 .label .info .main {
  font-weight: bold;
  font-size: 1.2rem;
}
body .options .option2 .label .info .sub {
  transition-delay: 0.1s;
}

body .options .option2:not(.active) .label .info .main {
  opacity: 1 !important;
  left: 0 !important;
}
body .options .option2:not(.active) .label {
  height: auto; /* 🔥 clave */
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
}

body .options .option2:not(.active) .label .info .main {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  font-size: 1rem;
}
body .options .option2:not(.active) .label .info {
  align-items: center;
    margin-left: 0;

}
body .options .option2.active .label .info .main {
  writing-mode: horizontal-tb;
  transform: none;
}
@media screen and (min-width: 1060px) {
  .options .option2.active {
    max-width: 1024px;
  }
}
</style>
