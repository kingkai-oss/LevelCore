// CHANGE THIS to the email address you want customers to contact.
const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";

document.getElementById("quoteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const game = document.getElementById("game").value.trim();
  const platform = document.getElementById("platform").value.trim();
  const target = document.getElementById("target").value.trim();
  const details = document.getElementById("details").value.trim();

  const subject = encodeURIComponent(`LevelUp Gaming quote - ${game}`);
  const body = encodeURIComponent(
`Hi LevelUp Gaming,

Name: ${name}
Game: ${game}
Platform: ${platform || "Not specified"}
Target: ${target}

Details:
${details || "None"}

Please send me a quote.

Thanks.`
  );

  if (BUSINESS_EMAIL.includes("YOUR_EMAIL")) {
    alert("Open script.js and replace YOUR_EMAIL@example.com with your real business email first.");
    return;
  }

  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
