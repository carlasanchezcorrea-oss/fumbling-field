<script setup>
import { ref } from "vue";
const isModalOpen = ref(false);
const errorMessage = ref("");
const isSubmitting = ref(false);

const openModal = () => {
  isModalOpen.value = true;

  // 📊 GA4 event
  if (typeof gtag === "function") {
    gtag("event", "view_content", {
      method: "video_watch_demo",
      form_name: "hero_banner_form",
      value: "",
      currency: "",
      content_type: "video",
      content_name: "demo_video",
    });
  }
  // ✅ Check if Meta Pixel is loaded
  if (typeof fbq === "function") {
    fbq("track", "ViewContent", {
      form_name: "hero_banner_form",
      value: "",
      currency: "",
      content_type: "video",
      content_name: "demo_video",

      debug_mode: true,
    });
  } else {
    console.warn("⚠️ fbq is not defined - Is the Meta Pixel installed?");
  }
};
const closeModal = () => {
  isModalOpen.value = false;
};

const handleSubmit = async (e) => {
  const form = e.target;

  const emailInput = form.querySelector("input[type='email']");
  const email = emailInput?.value;
  const formName = form.dataset.form;
  const eventId = "lead_" + Date.now();

  if (isSubmitting.value) return;

  isSubmitting.value = true;
  try {
    const response = await fetch(
      "https://dpm2.miaomada.co.jp/api/leads-save.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: formName,
          event_id: eventId,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Error HTTP");
      return;
    }

    // 🔴 EMAIL DUPLICATE
    if (data.type === "duplicate") {
      errorMessage.value = data.message;
      return;
    }

    // 🟢 ONLY IF NEW
    if (data.success === true) {
      sessionStorage.setItem("registrated", true);
      sessionStorage.setItem("email", emailInput.value);
      sessionStorage.setItem("formName", formName);

      emailInput.value = "";
      errorMessage.value = "";

      window.location.href = "/thank-you-newsletter";
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="heroBanner container-global">
    <div class="heroBanner_item-bg">
      <img src="/assets/heroBanner/item-product.png" alt="" />
    </div>
    <div class="container-global_box">
      <div class="hero-content">
        <h1 class="text-title">
          The new standard <br />
          in protein prep
        </h1>

        <p class="subtitle text-description">
          <strong class="text-main">Fast. Clean. Consistent.</strong> Precision
          in one smooth motion.
        </p>

        <div class="form">
          <form data-form="hero_banner_form" @submit.prevent="handleSubmit">
            <!-- 🔴 MENSAJE DINÁMICO -->
            <p v-if="errorMessage" class="error-message text-p">
              {{ errorMessage }}
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              class="text-description"
              required
              :disabled="isSubmitting"
            />
            <div class="buttons">
              <button
                class="primary text-main"
                type="submit"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Sending..." : "Notify me" }}
              </button>
              <button
                type="button"
                class="secondary text-main"
                @click="openModal"
              >
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
      </div>
    </div>
  </section>
</template>

<style src="./heroBanner.css"></style>

<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error-message {
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 6px;
}
/* ========================= */
/* 📱 MOBILE */
/* ========================= */

@media (max-width: 768px) {
  .heroBanner {
    height: 100vh;
    min-height: 800px;
    padding-top: 100px;
    align-items: flex-start;
    justify-content: center;
    background-image: url("/assets/heroBanner/hero-product-mobile.jpg");
    background-size: cover;
    /* 🔥 importante para mobile */
    background-position: center bottom;
  }
  .heroBanner .heroBanner_item-bg {
    display: none;
  }

  .heroBanner .hero-content {
    width: 100%;
    max-width: 100%;
  }

  .heroBanner h1 {
    font-size: 36px;
  }

  .heroBanner .subtitle {
    font-size: 14px;
  }

  .heroBanner .buttons {
    flex-direction: column;
  }

  .heroBanner button {
    width: 100%;
  }

  .heroBanner .modal {
    border-radius: 12px;
  }

  .heroBanner .close {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style>
