<template>
  <section>
    <div class="product-image-container">
      <!-- Imagen del producto -->
      <img
        src="/assets/dp-m2-product.png"
        alt="DP-M2 Protein Dispenser"
        class="product-image text-p"
      />
      <div class="hotspot" id="hotspot1">
        <div
          v-for="(hotspot, index) in hotspots"
          :key="index"
          class="hotspot-card"
          :id="`hotspot-${index}`"
          :class="{ active: hotspot.isOpen }"
          :style="{
            top: hotspot.position.top,
            left: hotspot.position.left,
          }"
        >
          <div class="hotspot-container">
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

            <div :class="[`hotspot-content hotspot-content-${index}`]">
              <h2 class="text-h3">{{ hotspot.title }}</h2>
              <h3 class="text-h3">{{ hotspot.subtitle }}</h3>
              <p class="text-p">{{ hotspot.description }}</p>
            </div>
          </div>
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
    position: { top: "42%", left: "58%" }, // Arriba derecha - contenedor transparente
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
    position: { top: "58%", left: "41%" }, // Abajo izquierda - contenedor transparente
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
    position: { top: "70%", left: "45%" }, // Centro izquierda - base negra
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
    position: { top: "65%", left: "55%" }, // Centro derecha - base negra
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
    position: { top: "82%", left: "50%" }, // Abajo centro - base negra
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
#hotspot-0 .hotspot-container,
#hotspot-1 .hotspot-container,
#hotspot-2 .hotspot-container,
#hotspot-3 .hotspot-container,
#hotspot-4 .hotspot-container {
  position: absolute;
}
#hotspot-0,
#hotspot-1,
#hotspot-2,
#hotspot-3,
#hotspot-4 {
  position: absolute;
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
  top: 0rem;
  left: 0rem;
}
.hotspot-card.active .hotspot-line-0::before {
  width: 19.5rem;
}

/* LINEA VERTICAL */
.hotspot-line-0::after {
  bottom: 0rem;
  left: 19.25rem;
}

/* TEXTO */
.hotspot-content-0 {
  bottom: 3rem;
  left: 12rem;
  width: 18rem;
}

/* --------------- hotspot-line-1 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */

.hotspot-line-1::before {
  top: 0rem;
  right: 0em;
}

.hotspot-card.active .hotspot-line-1::before {
  width: 19.2rem;
}

/* LINEA VERTICAL */
.hotspot-line-1::after {
  content: "";
  position: absolute;

  width: 2px;
  height: 30px;
  background: #2ab8ff;

  bottom: 0rem;
  right: 19rem;

  transform: scaleY(0);
  transform-origin: bottom;

  transition: transform 0.35s ease 0s;
}

/* TEXTO */
.hotspot-content-1 {
  position: absolute;
  bottom: 3rem;
  right: 5rem;
  width: 20rem;
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

  top: 0rem;
  right: 0rem;

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

  top: 0rem;
  right: 22rem;

  transform: scaleY(0);
  transform-origin: bottom;

  transition: transform 0.35s ease 0s;
}

/* TEXTO */
.hotspot-content-2 {
  position: absolute;
  top: 3rem;
  right: 10rem;
  width: 17rem;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.6s;
}

/* --------------- hotspot-line-3 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */
.hotspot-line-3::before {
  top: 0rem;
  left: 0rem;
}
.hotspot-card.active .hotspot-line-3::before {
  width: 192px;
}

/* LINEA VERTICAL */
.hotspot-line-3::after {
  bottom: 0rem;
  left: 19rem;
}

/* TEXTO */
.hotspot-content-3 {
  bottom: 3rem;
  left: 12rem;
  width: 20rem;
}

/* --------------- hotspot-line-4 -------------- */
/* LINEA */
/* LINEA HORIZONTAL */
.hotspot-line-4::before {
  top: 0rem;
  left: 0rem;
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
  bottom: -3rem;
  left: 16.5rem;
  width: 270px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ========================= */
/* 💻 DESKTOP (1024+) */
/* ========================= */
/* SECTION */
@media (min-width: 1024px) {
}

/* ========================= */
/* 💻 DESKTOP (1440++) */
/* ========================= */
/* SECTION */
@media (min-width: 1440px) {
  .product-image {
    width: 82.4rem;
    height: 82.4rem;
  }

  .hotspot-button {
    width: 32px;
    height: 32px;
  }
  .hotspot-button .hotspot-icon {
    font-weight: bold;
    font-size: 2.4rem;
  }
  /* Bullets position */
  #hotspot-0 {
    top: 38% !important;
  }
  #hotspot-1 {
    top: 55% !important;
  }
  #hotspot-2 {
    top: 67% !important;
  }
  #hotspot-3 {
    top: 62% !important;
  }
  /* --------------- hotspot-line-0 -------------- */
  .product-image-container .hotspot-content-0 {
    width: 27rem;
    bottom: 6rem;
  }
  /* --------------- hotspot-line-1 -------------- */
  .product-image-container .hotspot-content-1 {
    width: 27rem;
    bottom: 6rem;
    right: 10rem;
  }
  /* --------------- hotspot-line-2 -------------- */
  .product-image-container .hotspot-content-2 {
    width: 27rem;
  top: 6rem;
  right: 15rem;
  }
  .hotspot-card.active .hotspot-line-2::before {
    width: 30rem;
  }
  /* LINEA VERTICAL */
  .hotspot-line-2::after {
  right: 29.9rem;
  }
  /* --------------- hotspot-line-3 -------------- */
  .product-image-container .hotspot-content-3 {
    width: 27rem;
    bottom: 6rem;
    left: 17rem;
  }
  .hotspot-card.active .hotspot-line-3::before {
    width: 25rem;
  }
  /* LINEA VERTICAL */
  .hotspot-line-3::after {
    left: 24.9rem;
  }

   /* --------------- hotspot-line-4 -------------- */
  .product-image-container .hotspot-content-4 {
    left: 30rem; 
  }
  .hotspot-card.active .hotspot-line-4::before {
    width: 27rem;
  }

  /* --------------- TEXT-------------- */
  .product-image-container .hotspot-content h2 {
    font-size: 2rem;
    margin: 0;
    line-height: 1.5;
  }
  .product-image-container .hotspot-content h3 {
    font-size: 1.6rem;
    margin: 0;
    line-height: 2;
  }
  .product-image-container .hotspot-content p {
    font-size: 1.6rem;
    margin: 0;
  }
}
</style>
