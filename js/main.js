// Hamburger Menu Toggle (responsive)
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});





document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});




  // Cookie Consent Banner
  (function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    // Prüfen ob bereits entschieden wurde
    const consentGiven = localStorage.getItem("cookieConsent");

    if (!consentGiven) {
      banner.classList.add("show");
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.classList.remove("show");
      // Hier kannst du z. B. nicht-notwendige Scripts nachladen
      // z. B. Google Maps, Analytics etc.
    });

    declineBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "declined");
      banner.classList.remove("show");
      // Keine nachträglichen Cookies setzen
    });
  })();



  function loadIframe(button) {
  const container = button.parentElement;
  const type = container.getAttribute("data-type");

  let iframeSrc = "";

  if (type === "maps") {
    iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.5880803953914!2d8.459334976663303!3d49.49228757142513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cdbe6f7a79d3%3A0xfcc4ace0327786b0!2sIZ%20Uigurisches%20Restaurant%20Mannheim!5e0!3m2!1sde!2sde!";
  }

  

  container.innerHTML = `
    <iframe 
      src="${iframeSrc}" 
      width="100%" 
      height="450" 
      style="border:0;" 
      allowfullscreen 
      loading="lazy">
    </iframe>
  `;
}