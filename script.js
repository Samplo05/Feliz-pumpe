const countdown = document.getElementById("countdown");
const message = document.getElementById("message");
const title = document.getElementById("title");
const valeBtn = document.getElementById("vale-btn");

const targetDate = new Date("2025-08-06T00:00:00");
let hasLaunched = false;

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0 && !hasLaunched) {
    hasLaunched = true;
    countdown.style.display = "none";
    title.innerText = "¡Feliz cumpleaños Valen! 🎉";
    message.classList.remove("hidden");

    launchBalloons();

    return;
  }

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerText = `${days} días, ${hours}h ${minutes}m ${seconds}s`;
  }
}

function launchBalloons() {
  const balloonInterval = setInterval(() => {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 6000);
  }, 200);

  setTimeout(() => {
    clearInterval(balloonInterval);

    // Mostrar el botón cuando los globos se detienen
    valeBtn.classList.remove("hidden");
  }, 5000);
}

updateCountdown();
setInterval(updateCountdown, 1000);
