<template>
  <div class="hotspot" id="hotspot1">
    <div
      v-for="(hotspot, index) in hotspots"
      :key="index"
      class="hotspot-card"
      :id="`hotspot-${index}`"
      :class="{ active: hotspot.isOpen }"
    >
      <button
        class="hotspot-button"
        :class="{
          active: hotspot.isActive,
          clicked: hotspot.hasBeenClicked,
        }"
        :style="{
          top: hotspot.position.top,
          left: hotspot.position.left,
          transform: `translate(-50%, -50%) scale(${hotspot.hasBeenClicked ? '0.9' : '1'})`,
        }"
        @click="toggleHotspot(index)"
        :aria-label="`Feature ${index + 1}`"
      >
        <span class="hotspot-icon">
          {{ hotspot.isActive ? "+" : "−" }}
        </span>
      </button>

      <div :class="[`hotspot-line-${index}`]"></div>

      <div :class="[`hotspot-content-${index}`]">
        <h2 class="text-main">{{ hotspot.title }}</h2>
        <h3 class="text-main">{{ hotspot.subtitle }}</h3>
        <p class="text-p">{{ hotspot.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Configuración de hotspots con posiciones responsivas (en porcentajes)
const hotspots = ref([
  {
    isActive: true,
    hasBeenClicked: false,
    isOpen: false,
    position: { top: "28%", left: "63%" }, // Arriba derecha - contenedor transparente
    title: "Hopper",
    subtitle: "High-Capacity Storage. ",
    description:
      "Holds up to 1kg (2.2 lbs) of protein. Load it once. Forget the refills",
    icon: [],
    boxText: { class: "" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "42%", left: "35%" }, // Abajo izquierda - contenedor transparente
    title: "Agitator",
    subtitle: "Smooth Flow System.",
    description: "No clumps. No sticking. Just a clean, uninterrupted flow.",
    icon: [],
    boxText: { class: "" },
    line: { class: "" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "56%", left: "42%" }, // Centro izquierda - base negra
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
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "52%", left: "60%" }, // Centro derecha - base negra
    title: "Measuring Unit",
    subtitle: "Precision Core.",
    description:
      "A consistent 10–15g dose with one effortless slide. Every time.",
    icon: [],
    boxText: { class: "" },
  },
  {
    isActive: true,
    hasBeenClicked: false,
    position: { top: "67%", left: "50%" }, // Abajo centro - base negra
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
  },
]);

const toggleHotspot = (index) => {
  const hotspot = hotspots.value[index];

  hotspot.isOpen = !hotspot.isOpen;
  hotspot.isActive = !hotspot.isActive;
  hotspot.hasBeenClicked = true;

  console.log(hotspot.isOpen ? "open" : "close");
};

// Iniciar animación de pulso al montar
onMounted(() => {
  // Las animaciones CSS se activan automáticamente
});
</script>

<style scoped>
/* Hotspot Buttons */
.hotspot-button {
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
.hotspot-button.active:not(.clicked) {
  background: #2ab8ff;
  color: white;
  animation: pulse 2s ease-in-out infinite;
}

/* Estado inactivo (después del primer click - gris sin pulso, escala 0.9) */
.hotspot-button:not(.active) {
  background: #999999;
  color: white;
  animation: none;
  transform: translate(-50%, -50%) scale(0.9) !important;
  box-shadow: 0 2px 8px rgba(153, 153, 153, 0.3);
}

/* Estado activo después de haber sido clickeado (segundo click - azul sin pulso, escala 0.9) */
.hotspot-button.active.clicked {
  background: #2ab8ff;
  color: white;
  animation: none;
  transform: translate(-50%, -50%) scale(0.9);
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.3);
}

.hotspot-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.hotspot-button:active {
  transform: translate(-50%, -50%) scale(0.95);
}

.hotspot-icon {
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
.hotspot-line-0,
.hotspot-line-1,
.hotspot-line-2,
.hotspot-line-3,
.hotspot-line-4 {
  position: absolute;
  top: 0px;
  left: 0px;
}
.hotspot-line-0::before,
.hotspot-line-1::before,
.hotspot-line-2::before,
.hotspot-line-3::before,
.hotspot-line-4::before {
  content: "";
  position: absolute;

  width: 0px;
  height: 2px;
  background: #2ab8ff;

  transition: width 0.4s ease 0.35s;
}
.hotspot-card.active .hotspot-line-0::before,
.hotspot-card.active .hotspot-line-1::before,
.hotspot-card.active .hotspot-line-2::before,
.hotspot-card.active .hotspot-line-3::before,
.hotspot-card.active .hotspot-line-4::before {
  transition: width 0.4s ease 0s;
}

/* LINEA VERTICAL */
.hotspot-line-0::after,
.hotspot-line-1::after,
.hotspot-line-2::after,
.hotspot-line-3::after,
.hotspot-line-4::after {
  content: "";
  position: absolute;

  width: 2px;
  height: 30px;
  background: #2ab8ff;

  transform: scaleY(0);
  transform-origin: bottom;

  transition: transform 0.35s ease 0s;
}
.hotspot-card.active .hotspot-line-0::after,
.hotspot-card.active .hotspot-line-1::after,
.hotspot-card.active .hotspot-line-2::after,
.hotspot-card.active .hotspot-line-3::after,
.hotspot-card.active .hotspot-line-4::after {
  transform: scaleY(1);
  transition: transform 0.35s ease 0.4s;
}

/* TEXTO */
.hotspot-content-0,
.hotspot-content-3,
.hotspot-content-4 {
  position: absolute;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.6s;
}
.hotspot-card.active .hotspot-content-0,
.hotspot-card.active .hotspot-content-1,
.hotspot-card.active .hotspot-content-2,
.hotspot-card.active .hotspot-content-3,
.hotspot-card.active .hotspot-content-4 {
  opacity: 1;
  transform: translateY(0);
}
/* --------------- hotspot-line-0 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */
.hotspot-line-0::before {
  top: 180px;
  left: 310px;
}
.hotspot-card.active .hotspot-line-0::before {
  width: 192px;
}

/* LINEA VERTICAL */
.hotspot-line-0::after {
  top: 150px;
  left: 500px;
}

/* TEXTO */
.hotspot-content-0 {
  top: 7%;
  right: -40%;
  width: 270px;
}

/* --------------- hotspot-line-1 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */

.hotspot-line-1::before {
  top: 270px;
  right: -180px;
}

.hotspot-card.active .hotspot-line-1::before {
  width: 192px;
}

/* LINEA VERTICAL */
.hotspot-line-1::after {
  content: "";
  position: absolute;

  width: 2px;
  height: 30px;
  background: #2ab8ff;

  top: 240px;
  right: 10px;

  transform: scaleY(0);
  transform-origin: bottom;

  transition: transform 0.35s ease 0s;
}

/* TEXTO */
.hotspot-content-1 {
  position: absolute;
  top: 19%;
  right: 73%;
  width: 270px;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.6s;
}

/* --------------- hotspot-line-2 -------------- */
/* LINEA HORIZONTAL */
.hotspot-line-2::before {
  content: "";
  position: absolute;

  width: 0px;
  height: 2px;
  background: #2ab8ff;

  top: 360px;
  right: -210px;

  transition: width 0.4s ease 0.35s;
}

.hotspot-card.active .hotspot-line-2::before {
  width: 220px;
}

/* LINEA VERTICAL */
.hotspot-line-2::after {
  content: "";
  position: absolute;

  width: 2px;
  height: 30px;
  background: #2ab8ff;

  top: 360px;
  right: 10px;

  transform: scaleY(0);
  transform-origin: bottom;

  transition: transform 0.35s ease 0s;
}

/* TEXTO */
.hotspot-content-2 {
  position: absolute;
  top: 62%;
  right: 73%;
  width: 270px;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.6s;
}

/* --------------- hotspot-line-3 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */
.hotspot-line-3::before {
  top: 340px;
  left: 310px;
}
.hotspot-card.active .hotspot-line-3::before {
  width: 192px;
}

/* LINEA VERTICAL */
.hotspot-line-3::after {
  top: 310px;
  left: 500px;
}

/* TEXTO */
.hotspot-content-3 {
  top: 32%;
  right: -40%;
  width: 270px;
}

/* --------------- hotspot-line-4 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */
.hotspot-line-4::before {
  top: 435px;
  left: 240px;
}
.hotspot-card.active .hotspot-line-4::before {
  width: 150px;
}

/* LINEA VERTICAL */
.hotspot-line-4::after {
  width: 0px;
  height: 0px;
  /* top:310px;
  left:500px; */
}

/* TEXTO */
.hotspot-content-4 {
  top: 60%;
  right: -35%;
  width: 270px;
}
</style>
>
