import { ref } from "vue";
// const GA_ID = import.meta.env.PUBLIC_BACK_URL_PROD;
const url_api = import.meta.env.PUBLIC_BACK_URL_DEV;

export function useHeroBanner() {
  const isModalOpen = ref(false);
  const errorMessage = ref("");
  const isSubmitting = ref(false);

  const openModal = () => {
    isModalOpen.value = true;

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

  const handleSubmit = async (e: Event) => {
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector(
      "input[type='email']",
    ) as HTMLInputElement;
    const email = emailInput?.value;
    const formName = form.dataset.form;
    const eventId = "lead_" + Date.now();

    if (isSubmitting.value) return;

    isSubmitting.value = true;
    try {
      const response = await fetch(`${url_api}/leads-save.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: formName,
          event_id: eventId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error HTTP");
        return;
      }

      if (data.type === "duplicate") {
        errorMessage.value = data.message;
        return;
      }

      if (data.success === true) {
        sessionStorage.setItem("registrated", "true");
        sessionStorage.setItem("email", emailInput.value);
        sessionStorage.setItem("formName", formName || "");

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

  const kickstarterRedirect = () => {
    if (typeof gtag === "function") {
      gtag("event", "kickstarter_redirect", {
        method: "kickstarter_redirect",
        form_name: "hero_banner",
        value: "",
        currency: "",
        content_type: "click",
        content_name: "kickstarter_redirect",
      });
    }

    if (typeof fbq === "function") {
      fbq("track", "KickstarterRedirect", {
        form_name: "hero_banner",
        value: "",
        currency: "",
        content_type: "click",
        content_name: "kickstarter_redirect",
        debug_mode: true,
      });
    } else {
      console.warn("⚠️ fbq is not defined - Is the Meta Pixel installed?");
    }
  };

  return {
    isModalOpen,
    errorMessage,
    isSubmitting,
    openModal,
    closeModal,
    handleSubmit,
    kickstarterRedirect,
  };
}