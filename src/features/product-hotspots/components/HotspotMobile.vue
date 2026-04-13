<template>
  <section>
    <div class="product-image-container">
      <!-- Imagen del producto -->
      <img
        src="/assets/hotspot/product.png"
        alt="DP-M2 Protein Dispenser"
        class="product-image text-p"
      />
      <div
        v-for="(hotspot, index) in hotspots"
        :key="index"
        class="hotspot-mobile-card"
        :class="{ active: hotspot.isOpen }"
        :style="{
          top: hotspot.position.top,
          left: hotspot.position.left,
        }"
      >
        <!-- BOTÓN -->
        <button
          class="hotspot-mobile-button"
          :class="{
            active: hotspot.isOpen,
            clicked: hotspot.hasBeenClicked,
          }"
          @click="toggleHotspotMobile(index)"
        >
          <span>{{ !hotspot.isOpen ? "+" : "−" }}</span>
        </button>

        <!-- LINEA -->
        <div class="hotspot-mobile-line" :style="hotspot.lineStyle"></div>

        <!-- TEXTO -->
        <div
          class="hotspot-mobile-content"
          :class="hotspot.contentOffset.align"
          :style="{
            top: hotspot.contentOffset.top,
            left: hotspot.contentOffset.left,
          }"
        >
          <h2 class="text-h3">{{ hotspot.title }}</h2>
          <h3 class="text-h3">{{ hotspot.subtitle }}</h3>
          <p class="text-p">{{ hotspot.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Hotspot configuration with responsive positions (in percentages)
const hotspots = ref([
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: true,
    position: { top: "25%", left: "87%" }, // Top right - transparent container
    title: "Hopper",
    subtitle: "High-Capacity Storage. ",
    description:
      "Holds up to 1kg (2.2 lbs) of protein. Load it once. Forget the refills",
    icon: [],
    boxText: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-left": "0px",
      "--line-width": "40px",

      "--line-after-top": "-123px",
      "--line-after-left": "40px",
      "--line-height": "125px",
      "--origin": "bottom",
    },

    contentOffset: { top: "-250px", left: "40%" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: false,
    position: { top: "43%", left: "35%" }, // Bottom left - transparent container
    title: "Agitator",
    subtitle: "Smooth Flow System.",
    description: "No clumps. No sticking. Just a clean, uninterrupted flow.",
    icon: [],
    boxText: { class: "" },
    line: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-right": "0px",
      "--line-width": "60px",

      "--line-after-top": "-178px",
      "--line-after-right": "60px",
      "--line-height": "180px",
      "--origin": "top",
    },

    contentOffset: { top: "-300px", left: "30px" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: false,
    position: { top: "60%", left: "42%" }, // Center left - black base
    title: "Nozzles",
    subtitle: "Controlled Pour.",
    description:
      "Two interchangeable nozzles for a clean, spill-free flow with any shaker size.",
    icon: [
      {
        iconSvg: "",
        text: "Long Nozzle",
      },
      {
        iconSvg: "",
        text: "Short Nozzle",
      },
    ],
    boxText: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-right": "10px",
      "--line-width": "82px",

      "--line-after-top": "0px",
      "--line-after-right": "90px",
      "--line-height": "150px",
      "--origin": "top",
    },

    contentOffset: { top: "160px", left: "50%" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: false,
    position: { top: "52%", left: "75%" }, // Center right - black base
    title: "Measuring Unit",
    subtitle: "Precision Core.",
    description:
      "A consistent 10–15g dose with one effortless slide. Every time.",
    icon: [],
    boxText: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-left": "0px",
      "--line-width": "70px",

      "--line-after-top": "0px",
      "--line-after-left": "70px",
      "--line-height": "200px",
      "--origin": "bottom",
    },

    contentOffset: { top: "210px", left: "20px" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: false,
    position: { top: "77%", left: "50%" }, // Bottom center - black base
    boxText: { class: "" },
    line: { class: "" },
    title: "Heavy-Duty Stand",
    subtitle: "Solid Foundation.",
    description: "A robust metal base designed for stability and confidence.",
    icon: [
      {
        iconSvg: "",
        text: "Comes with a stand attachment that fits any shaker, oversized or compact.",
      },
    ],
    lineStyle: {
      "--line-after-top": "0px",
      "--line-after-left": "0px",
      "--line-height": "100px",
      "--origin": "bottom",
    },

    contentOffset: { top: "100px", left: "20px" },
  },
]);

const toggleHotspotMobile = (index) => {
  const current = hotspots.value[index];

  // 👉 If already open, close it
  if (current.isOpen) {
    current.isOpen = false;
    return;
  }

  // 👉 Otherwise, close all and open the clicked one
  hotspots.value.forEach((h, i) => {
    h.isOpen = i === index;
  });
};

</script>

<style scoped>
/* w:364px ; h: 756px Original*/
/* max-w:182 ; h: 378 Mobile max*/

.product-image {
  width: 182px;
  height: 378px;
  object-fit: contain;
  display: block;
}
/* Hotspot Buttons TEXT */
.hotspot-mobile-card h2 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
.hotspot-mobile-card h3,
.hotspot-mobile-card p {
  line-height: 1.2;
  font-size: 1.6em;
  margin: 0;
}

.product-image-container {
  position: relative;
}
/* Hotspot Buttons */
.hotspot-mobile-button {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background: #2ab8ff;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
  z-index: 10;
  /* Animación de pulso inicial */
  animation: pulse 2s ease-in-out infinite;
}

/* Estado activo (primer estado - azul con pulso) */
.hotspot-mobile-button.active:not(.clicked) {
  background: #2ab8ff;
  color: white;
  animation: pulse 2s ease-in-out infinite;
}

/* Estado activo (primer estado - azul con pulso) */
.hotspot-mobile-button.active:not(.clicked) {
  background: #2ab8ff;
  color: white;
  animation: pulse 2s ease-in-out infinite;
}

/* Estado inactivo (después del primer click - gris sin pulso, escala 0.9) */
.hotspot-mobile-button:not(.active) {
  background: #999999;
  color: white;
  animation: none;
  transform: translate(-50%, -50%) scale(0.9) !important;
  box-shadow: 0 2px 8px rgba(153, 153, 153, 0.3);
}

/* Estado activo después de haber sido clickeado (segundo click - azul sin pulso, escala 0.9) */
.hotspot-mobile-button.active.clicked {
  background: #2ab8ff;
  color: white;
  animation: none;
  transform: translate(-50%, -50%) scale(0.9);
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.3);
}

.hotspot-mobile-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.hotspot-mobile-button:active {
  transform: translate(-50%, -50%) scale(0.95);
}

.hotspot-mobile-icon {
  display: block;
  line-height: 1;
}

/* Animación de pulso */
@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(96, 165, 238, 0.7);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 0 0 12px rgba(0, 102, 255, 0);
    opacity: 0.9;
  }
}

/* --------------- hotspot-animation -------------- */
.hotspot-mobile-card {
  position: absolute;
}

/* LINEA BASE */
.hotspot-mobile-line {
  position: absolute;
  top: 0;
  left: 0;
}

/* BASE */
.hotspot-mobile-line::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #2ab8ff;

  top: var(--line-top);
  left: var(--line-left);
  right: var(--line-right);

  transition: width 0.4s ease;
}

.hotspot-mobile-card.active .hotspot-mobile-line::before {
  width: var(--line-width);
}

/* VERTICAL */
.hotspot-mobile-line::after {
  content: "";
  position: absolute;
  width: 2px;
  height: var(--line-height);
  background: #2ab8ff;

  top: var(--line-after-top);
  left: var(--line-after-left);
  right: var(--line-after-right);

  transform: scaleY(0);
  transform-origin: var(--origin, bottom);

  transition: transform 0.35s ease;
}

.hotspot-mobile-card.active .hotspot-mobile-line::after {
  transform: scaleY(1);
}

/* TEXTO */
.hotspot-mobile-content {
  position: absolute;

  transform: translateX(-60%);

  width: min(250px, 80vw);

  box-sizing: border-box;

  opacity: 0;
  transition: 0.3s ease;
}

.hotspot-mobile-card.active .hotspot-mobile-content {
  opacity: 1;
}
</style>
