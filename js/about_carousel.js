document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;

  function updateCarousel() {
    // Entferne alle aktiven Klassen
    items.forEach(item => item.classList.remove("active"));

    // Setze aktive Klasse auf das zentrale Bild
    items[currentIndex].classList.add("active");

    // Berechne transform‑Offset
    const itemWidth = items[currentIndex].offsetWidth + 24;
    const containerWidth = document.querySelector(".carousel-track-container").offsetWidth;
    const offset = (containerWidth / 2) - (itemWidth / 2) - (itemWidth * currentIndex);

    track.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // init
  updateCarousel();
});
