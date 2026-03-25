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
          width="40"
          height="27"
          viewBox="0 0 40 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.22222 26.6667H37.7778C39 26.6667 40 25.6667 40 24.4444C40 23.2222 39 22.2222 37.7778 22.2222H2.22222C1 22.2222 0 23.2222 0 24.4444C0 25.6667 1 26.6667 2.22222 26.6667ZM2.22222 15.5556H37.7778C39 15.5556 40 14.5556 40 13.3333C40 12.1111 39 11.1111 37.7778 11.1111H2.22222C1 11.1111 0 12.1111 0 13.3333C0 14.5556 1 15.5556 2.22222 15.5556ZM0 2.22222C0 3.44444 1 4.44444 2.22222 4.44444H37.7778C39 4.44444 40 3.44444 40 2.22222C40 1 39 0 37.7778 0H2.22222C1 0 0 1 0 2.22222Z"
            fill="black"
          />
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
  width: -webkit-fill-available;
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
  background: rgb(0, 0, 0 ,0.5);
  display: flex;
  justify-content: center;
  z-index: 2000;
}

/* PANEL DERECHO */
.menu-right {
  width: 35%;
  min-width: 300px;
  padding: 60px 40px;
  color: white;
  background: #000;
}

/* BOTÓN CERRAR */
.close {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  position: absolute;
  right: 2rem;
  top: 30px;
  cursor: pointer;
  text-align: end;
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
  font-family: "RalewayRegular";
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
  text-align: center;
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
  .hamburger svg {
    width: 2.5rem;
    height: 2.5rem;
  }
}
/* ========================= */
/* 🖥️ DESKTOP */
/* ========================= */
@media (min-width: 1024px) {
  nav .logo {
    padding: 0 1rem;
  }
  .navbar .logo img {
    width: 18.7rem;
    max-width: 18.7rem;
  }
  nav .hamburger {
    padding-right: 1.2rem;
  }
  nav .hamburger svg {
    width: 3rem;
    height: 2.85rem;
  }
  /* OVERLAY */
  .overlay {
    justify-content: flex-end;
  }
  .menu-right {
    max-width: 40rem;
  }
  .overlay .close {
    font-size: 4rem;
    font-weight: bold;
    right: 5rem;
  }
  .menu-right ul {
    margin-top : 5rem;
  }
}

@media (min-width: 1260px) {
  .navbar .logo img {
    width: 26.2rem;
    max-width: 26.2rem;
  }
  nav .hamburger {
    padding-top: 0.5rem;
    padding-right: 1.2rem;
  }
  nav .hamburger svg {
    width: 4rem;
    height: 2.85rem;
  }
}
</style>
