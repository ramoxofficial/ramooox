console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCta.setAttribute("href", ctaEl.getAttribute("href"));
  overlayCta.setAttribute("target", "_blank");
  overlayCta.style = `position: absolute;`;
  overlayCard.appendChild(overlayCta);
};

cards.forEach((card) => {
  card.addEventListener("mouseenter", applyOverlayMask);
  card.addEventListener("mouseleave", (e) => {
    overlay.style.setProperty("--opacity", 0);
  });
});
