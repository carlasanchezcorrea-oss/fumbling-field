<script setup>
import { onMounted } from "vue";

function generateSessionToken() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function isReload() {
  if (performance.getEntriesByType("navigation").length > 0) {
    return performance.getEntriesByType("navigation")[0].type === "reload";
  }
  return performance.navigation.type === 1;
}

onMounted(() => {
  let token = sessionStorage.getItem("session_token");

  // 🆕 IF NOT EXISTS → CREATE
  if (!token) {
    token = generateSessionToken();
    sessionStorage.setItem("session_token", token);
    sessionStorage.setItem("registrated", false);
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("formName", "");
  }
});
</script>

<template></template>
