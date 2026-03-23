const form = document.querySelector("#lead-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;

  await fetch("http://localhost:8000/api/leads.php", {
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