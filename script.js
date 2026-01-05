const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

/* Confetti effect */
function confetti() {
  for (let i = 0; i < 150; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");

    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.animationDuration = (Math.random() * 3 + 2) + "s";
    c.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

/* YES click triggers confetti and removes No button */
yesBtn.addEventListener("click", () => {
  question.innerHTML = "wow thnx i love free will";
  confetti();
  if (noBtn) noBtn.remove(); // removes No button
});

/* NO button moves away on hover forever */
noBtn.addEventListener("mouseover", () => {
  const rect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
