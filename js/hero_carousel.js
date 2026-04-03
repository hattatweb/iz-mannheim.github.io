document.addEventListener("DOMContentLoaded", function() {
  const heroSlides = document.querySelectorAll('.hero-slide');
  let heroIndex = 0;

  if (heroSlides.length === 0) {
    console.warn("Kein Hero-Slide gefunden!");
    return;
  }

  heroSlides[0].classList.add('active');

  setInterval(function() {
    heroSlides.forEach(slide => slide.classList.remove('active'));

    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
  }, 4000);
});