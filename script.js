const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

/* Confetti effect */
function confetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

/* YES click */
yesBtn.addEventListener("click", () => {
  question.innerHTML = "wow thnx i love free will";
  confetti();
  if (noBtn) noBtn.remove(); // No disappears after Yes click
});

/* NO button: moves away on hover forever */
noBtn.addEventListener("mouseover", () => {
  const rect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
