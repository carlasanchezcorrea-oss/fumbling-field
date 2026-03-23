<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? "hidden" : "auto";
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (id) => {
  isOpen.value = false;
  document.body.style.overflow = "auto";

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- NAVBAR -->
  <nav :class="['container-global', { scrolled: isScrolled }]">
    <div class="container navbar">
      <!-- LOGO -->
      <div class="logo">
        <img src="/assets/navbar/Logo.svg" :class="{ invert: isScrolled }" />
      </div>

      <!-- HAMBURGER -->
      <div class="hamburger" @click="toggleMenu">
        <svg
          width="30"
          height="30"
          :stroke="isScrolled ? '#fff' : '#000'"
          fill="none"
        >
          <line x1="5" y1="8" x2="25" y2="8" stroke-width="3" />
          <line x1="5" y1="15" x2="25" y2="15" stroke-width="3" />
          <line x1="5" y1="22" x2="25" y2="22" stroke-width="3" />
        </svg>
      </div>
    </div>
  </nav>

  <!-- OVERLAY -->
  <div v-if="isOpen" class="overlay">
    <div class="menu-right">
      <button class="close" @click="toggleMenu">✕</button>

      <ul>
        <li @click="scrollToSection('problem')">The Problem & the solution</li>
        <li @click="scrollToSection('benefits')">Benefits</li>
        <li @click="scrollToSection('vip')">VIP Reservation</li>
        <li @click="scrollToSection('quality')">Engineering of Quality</li>
        <li @click="scrollToSection('testimonials')">Social Proof</li>
      </ul>

      <div class="divider"></div>

      <ul class="footer-links">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Refund Policy</li>
        <li>特定商取引法に基づく表記</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* NAVBAR */
nav {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;   
  transition: background 0.3s;
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
}

/* GRADIENT AL SCROLL */
nav.scrolled {
  background: #000;
}

/* HAMBURGER */
.hamburger {
  cursor: pointer;
}

/* OVERLAY */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
}

/* PANEL DERECHO */
.menu-right {
  width: 35%;
  min-width: 300px;
  padding: 60px 40px;
  color: white;
}

/* BOTÓN CERRAR */
.close {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  position: absolute;
  right: 40px;
  top: 30px;
  cursor: pointer;
}

/* MENU ITEMS */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 20px 0;
  cursor: pointer;
  font-size: 18px;
}

/* DIVIDER */
.divider {
  margin: 40px 0;
  border-bottom: 1px solid #444;
}

/* FOOTER LINKS */
.footer-links li {
  font-size: 14px;
  color: #aaa;
}

.invert {
  filter: invert(1);
}

/* ========================= */
/* 📱 MOBILE */
/* ========================= */
@media (max-width: 768px) {
  .logo img {
    width: 147px;
    max-width: 147px;
  }
}
</style>
