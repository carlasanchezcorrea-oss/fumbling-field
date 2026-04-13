<script setup>
import { onMounted, onBeforeUnmount } from "vue";

// 🔥 Helpers
const destroySession = () => {
  sessionStorage.removeItem("session_token");
  sessionStorage.removeItem("registrated");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("formName");
};

const isReload = () => {
  if (performance.getEntriesByType("navigation").length > 0) {
    return performance.getEntriesByType("navigation")[0].type === "reload";
  }
  return performance.navigation.type === 1;
};

// 🚀 MAIN
onMounted(() => {
  const email = sessionStorage.getItem("email");
  const registrated = sessionStorage.getItem("registrated");
  const formName = sessionStorage.getItem("formName");

  // 🔐 1. EMAIL ACCESS VALIDATION
  if (!email || registrated !== "true") {
    console.warn("⛔ Invalid access, redirecting...");
    window.location.href = "/";
    return;
  }

  // 📊 2. TRACKING
  if (typeof gtag === "function") {
    gtag("event", "lead", {
      method: "newsletter",
      form_name: formName,
      content_type: "product",
      content_name: "newsletter_signup",
    });
  }

  if (typeof fbq === "function") {
    fbq("track", "Lead", {
      method: "newsletter",
      form_name: formName,
      content_type: "product",
      content_name: "newsletter_signup",
    });
  }

  // 🔄 3. IF PAGE RELOADS → destroy session
  if (isReload()) {
    destroySession();
  }

  // 🧹 4. CLEANUP ON EXIT (optional)
  window.addEventListener("beforeunload", destroySession);
});

  // 🧼 cleanup
  onBeforeUnmount(() => {
    window.removeEventListener("beforeunload", destroySession);
  });
</script>
