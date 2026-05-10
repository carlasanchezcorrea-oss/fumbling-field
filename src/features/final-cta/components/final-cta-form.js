document.addEventListener("DOMContentLoaded", () => {
  const form_01 = document.getElementById("lead-form_01");
  if (!form_01) return;

  const emailInput = form_01.querySelector("input[name='email']");
  const button = form_01.querySelector("button[type='submit']");

  let errorEl = form_01.querySelector(".error-message");
  let errorElcontainer = document.querySelector("#error-message-container");

  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.className = "error-message";
    errorElcontainer.appendChild(errorEl);
  }

  form_01.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput?.value;
    const formName = form_01.dataset.form || "unknown_form";
    const eventId = "lead_" + Date.now();

    if (!email) return;

    errorEl.textContent = "";

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch(
        "http://localhost:8000/api/leads-save.php",
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
        throw new Error("Error en la respuesta");
      }

      if (data.type === "duplicate") {
        errorEl.textContent = data.message;
        return;
      }

      if (data.success === true) {
        sessionStorage.setItem("registrated", true);
        sessionStorage.setItem("email", emailInput?.value);
        sessionStorage.setItem("formName", formName);
        form_01.reset();

        window.location.href = "/thank-you-newsletter";
      }
    } catch (error) {
      console.error("Error:", error);
      errorEl.textContent = "Ocurrió un error. Inténtalo nuevamente.";
    } finally {
      button.disabled = false;
      button.textContent = "Notify me";
    }
  });
});
