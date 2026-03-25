<template>
  <section>
    <div class="product-image-container">
      <!-- Imagen del producto -->
      <img
        src="/assets/dp-m2-product.png"
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
          <h2>{{ hotspot.title }}</h2>
          <h3>{{ hotspot.subtitle }}</h3>
          <p>{{ hotspot.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Configuración de hotspots con posiciones responsivas (en porcentajes)
const hotspots = ref([
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: true,
    position: { top: "55%", left: "63%" }, // Arriba derecha - contenedor transparente
    title: "Hopper",
    subtitle: "High-Capacity Storage. ",
    description:
      "Holds up to 1kg (2.2 lbs) of protein. Load it once. Forget the refills",
    icon: [],
    boxText: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-left": "0px",
      "--line-width": "50px",

      "--line-after-top": "-98px",
      "--line-after-left": "50px",
      "--line-height": "100px",
      "--origin": "bottom",
    },

    contentOffset: { top: "-220px", left: "50%" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "63%", left: "35%" }, // Abajo izquierda - contenedor transparente
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

      "--line-after-top": "-128px",
      "--line-after-right": "60px",
      "--line-height": "130px",
      "--origin": "top",
    },

    contentOffset: { top: "-250px", left: "30px" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "70%", left: "42%" }, // Centro izquierda - base negra
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
    position: { top: "67%", left: "60%" }, // Centro derecha - base negra
    title: "Measuring Unit",
    subtitle: "Precision Core.",
    description:
      "A consistent 10–15g dose with one effortless slide. Every time.",
    icon: [],
    boxText: { class: "" },
    lineStyle: {
      "--line-top": "0px",
      "--line-left": "0px",
      "--line-width": "50px",

      "--line-after-top": "0px",
      "--line-after-left": "50px",
      "--line-height": "160px",
      "--origin": "bottom",
    },

    contentOffset: { top: "160px", left: "20px" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "77%", left: "50%" }, // Abajo centro - base negra
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

  // 👉 si ya está abierto, lo cerramos
  if (current.isOpen) {
    current.isOpen = false;
    return;
  }

  // 👉 si no, cerramos todos y abrimos el clickeado
  hotspots.value.forEach((h, i) => {
    h.isOpen = i === index;
  });
};

// Iniciar animación de pulso al montar
onMounted(() => {
  // Las animaciones CSS se activan automáticamente
});
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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

  transform: translateX(-50%);

  width: min(260px, 90vw);

  padding: 12px;
  box-sizing: border-box;

  opacity: 0;
  transition: 0.3s ease;
}

.hotspot-mobile-card.active .hotspot-mobile-content {
  opacity: 1;
}
</style>
