<script setup>
import { onMounted, onBeforeUnmount } from "vue";

// 🔥 Helpers
const destroySession = () => {
  sessionStorage.removeItem("session_token");
  sessionStorage.removeItem("registrated");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("formName");
  console.log("🧹 Sesión eliminada");
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

  console.log({ email, registrated });

  // 🔐 1. VALIDACIÓN DE ACCESO (PRIMERO)
  if (!email || registrated !== "true") {
    console.warn("⛔ Acceso inválido, redirigiendo...");
    window.location.href = "/";
    return; // 🔥 importante cortar ejecución
  }

  // 📊 2. TRACKING (solo si es válido)
  if (typeof gtag === "function") {
    gtag("event", "lead", {
      method: "newsletter",
      form_name: formName,
      content_type: "product",
    });
  }

  if (typeof fbq === "function") {
    fbq("track", "Lead", {
      method: "newsletter",
      form_name: formName,
      content_type: "product",
    });
  }

  // 🔄 3. SI RECARGA → destruir sesión
  if (isReload()) {
    destroySession();
  }

  // 🧹 4. LIMPIEZA AL SALIR (opcional)
  window.addEventListener("beforeunload", destroySession);
});

// 🧼 cleanup real (buena práctica)
onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", destroySession);
});
</script>