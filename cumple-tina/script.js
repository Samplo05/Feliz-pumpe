const countdown = document.getElementById("countdown");
const message = document.getElementById("message");
const title = document.getElementById("title");

const targetDate = new Date("2025-08-06T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.style.display = "none";
    title.innerText = "¡Feliz cumpleaños Tina! 🎉";
    message.classList.remove("hidden");
    launchBalloons();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerText = `${days} días, ${hours}h ${minutes}m ${seconds}s`;
}

function launchBalloons() {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animationDuration = `${3 + Math.random() * 5}s`;
    document.body.appendChild(balloon);
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
