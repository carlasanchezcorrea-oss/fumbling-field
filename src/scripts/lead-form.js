const form = document.querySelector("#lead-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;

  await fetch("https://test-dev.infinityfreeapp.com/leads-save.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      source: "landing"
    })
  });
});