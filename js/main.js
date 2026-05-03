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
















// MenuGen






const menuData = {
  vorspeisen: [
    {
      id: 1,
      name: "Uigur Salat",
      price: "6,99 €",
      image: "assets/vorspeise1.png",
      description: "Karotten, Glasnudeln, Paprika und Knoblauch",
      contains: ""
    },
    {
      id: 2,
      name: "Chili-Erdnuss-Hähnchen",
      price: "11,99 €",
      image: "assets/vorspeise2.png",
      description: "Hähnchenbrust, Erdnüsse, Koriander und Chilisauce",
      contains: "Erdnüsse"
    },
    {
      id: 3,
      name: "Terhemek",
      price: "5,99 €",
      image: "assets/vorspeise3.png",
      description: "Gurke, Sesam und spezielle Sauce",
      contains: "Sesam"
    },
    {
      id: 4,
      name: "Chili-Rindscheiben",
      price: "13,99 €",
      image: "assets/vorspeise4.png",
      description: "Rindfleisch mit spezieller Sauce",
      contains: ""
    }
  ],

  hauptgerichte: [
    {
      id: 20,
      name: "Manta",
      price: "14,99 €",
      image: "assets/hauptgericht1.png",
      description: "Gefüllte Teigtaschen mit Rindfleisch, Gewürzen, Chilisauce und Essig",
      contains: "Gluten"
    },
    {
      id: 22,
      name: "Uigur Polo",
      price: "14,90 €",
      image: "assets/hauptgericht2.png",
      description: "Rindfleisch, Karotten, Kichererbsen, Rosinen und Reis - Nur am Fr,Sa und So",
      contains: ""
    },
    {
      id: 23,
      name: "Göschnan",
      price: "14,90 €",
      image: "assets/hauptgericht3.png",
      description: "Gefüllte Teigtaschen mit Rindfleisch und Gewürzen",
      contains: "Gluten"
    },
    {
      id: 25,
      name: "Uigur Ramen",
      price: "12,90 €",
      image: "assets/hauptgericht4.png",
      description: "Rinderknochensuppe mit Rindscheiben, Gewürzen, Chiliöl und Nudeln - Werktags ab 17:00 Uhr",
      contains: "Gluten"
    }
  ],

  nudelgerichte: [
    {
      id: 33,
      name: "Korulghan Laghmen",
      price: "14,99 €",
      image: "assets/nudel1.png",
      description: "Speziell zubereitetes Rindfleisch,gebratene Nudeln, grüne und rote Paprika und Frühlingszwiebeln.",
      contains: "Gluten"
    },
    {
      id: 30,
      name: "Iz Spezial Laghmen",
      price: "15,99 €",
      image: "assets/nudel1.png",
      description: "Extra Rindfleisch, Nudeln, schwarze Pilze, Chinakohl, sepzielle Gewürze und Paprika",
      contains: "Gluten"
    },
    {
      id: 31,
      name: "Guyru Laghmen",
      price: "14,99 €",
      image: "assets/nudel2.png",
      description: "Rindfleisch, Nudeln, Chinakohl, schwarze Pilze und Paprika",
      contains: "Gluten"
    },
    {
      id: 32,
      name: "Kıyma Laghmen",
      price: "14,99 €",
      image: "assets/nudel3.png",
      description: "Rindfleisch, Nudeln, Chinakohl und in Stücke geschnittenes Gemüse",
      contains: "Gluten"
    },
    {
      id: 34,
      name: "Marjan-kormasi",
      price: "14,99 €",
      image: "assets/nudel3.png",
      description: "Rindfleisch, gekochte und in Stücke geschnittene Nudeln, Chinakohl, rote und grüne Paprika.",
      contains: "Gluten"
    },
    {
      id: 35,
      name: "Tochu Laghmen",
      price: "13,99 €",
      image: "assets/nudel4.png",
      description: "Hähnchenfleisch, Nudeln, Chinakohl und Paprika",
      contains: "Gluten"
    }
  ],

  reisgerichte: [
    {
      id: 37,
      name: "Uigur Kazan Kawap Beilage: Reis",
      price: "22,90 €",
      image: "assets/reis1.png",
      description: "Gebratenes Rindfleisch mit Zwiebeln und Gewürzen - Beilage Reis",
      contains: ""
    },
    {
      id: 26,
      name: "Yis Purcak Kormasi Beilage: Reis",
      price: "19,99 €",
      image: "assets/reis2.png",
      description: "Rindfleisch mit Bohnen, Chili und Knoblauch - Beilage: Reis",
      contains: ""
    },
    {
      id: 27,
      name: "Pidigen Gösch Kormasi Beilage: Reis",
      price: "19,99 €",
      image: "assets/reis3.png",
      description: "Auberginen mit Rindfleisch und Paprika - Beilage: Reis",
      contains: ""
    },
    {
      id: 36,
      name: "Iz Alahide Kormasi Beilage: Reis",
      price: "22, 50 €",
      image: "assets/reis3.png",
      description: "Rindfleisch, Zwiebeln, rote und grüne Paprika.- Beilage: Reis",
      contains: ""
    },
    {
      id: 39,
      name: "Mor Kormasi Beilage: Reis",
      price: "19,99 €",
      image: "assets/reis3.png",
      description: "Rindfleisch, schwarze Pilze, rote und grüne Paprika. - Beilage: Reis",
      contains: ""
    },
    {
      id: 40,
      name: "Tochu Meghiz Kormasi Beilage: Reis",
      price: "15,99 €",
      image: "assets/reis3.png",
      description: "Hähnchenfleisch (ohne Knochen), Erdnüsse, rote und grüne Paprika. - Beilage: Reis",
      contains: ""
    },
    {
      id: 45,
      name: "Koy Korga Beilage: Reis",
      price: "1 P. 22,50 € 2-3P. 36,99€",
      image: "assets/reis3.png",
      description: "Lammkeule und Lammrippen, Zwiebeln, spezielle Gewürze, rote und grüne Paprika. - Beilage: Reis",
      contains: ""
    }
  ],

  spezialgerichte: [
    {
      id: 42,
      name: "Kurghak Tochu Kormasi für 2-3 Personen - Beilage: Reis",
      price: "34,99 €",
      image: "assets/spezial1.png",
      description: "Frittierte Hähnchenschenkel /(Hähnchenbrust möglich) mit Chili, grüne und rote / Mittelscharf (für 2–3 Personen) - Zu Stoßzeiten dauert es 40-50 Minuten",
      contains: ""
    },
    {
      id: 43,
      name: "Accik Tochu Kormasi für 2-3 Personen",
      price: "34,99 €",
      image: "assets/spezial2.png",
      description: "Hähnchen(mit Knochen)/Hähnchenbrut möglich mit Chili (sehr scharf) , Gewürzen und Nudeln (für 2–3 Personen) - Zu Stoßze�ten dauert es 40–50 Minuten",
      contains: ""
    },
    {
      id: 44,
      name: "Tochu Kordak",
      price: "1P. 13,99 € 2-3P. 34,99€",
      image: "assets/spezial3.png",
      description: "Hähnchengericht(mit Knochen) mit Gewürzen und Gemüse, Chili (etwas scharf) - Zu Stoßze�ten dauert es 40–50 Minuten",
      contains: ""
    }
  ],

  vegetarisch: [
    {
      id: 60,
      name: "Güro-Laghmen",
      price: "13,99 €",
      image: "assets/veg1.png",
      description: "Gekochte Nudeln, Ch�nakohl, schwarze P�lze, rote und grüne Papr�ka",
      contains: "Gluten"
    },
    {
      id: 61,
      name: "Vegetarisches Korulghan Laghmen",
      price: "13,99 €",
      image: "assets/veg1.png",
      description: "Gebratene Nudeln mit Paprika und Frühlingszwiebeln",
      contains: "Gluten"
    },
    {
      id: 62,
      name: "Accik Tofu - Beilage: Reis",
      price: "15,99 €",
      image: "assets/veg2.png",
      description: "Tofu mit Chili (mittelscharf) und spezieller Sauce",
      contains: "Soja"
    },
    {
      id: 63,
      name: "Tofu Kormasi Beilage: Reis",
      price: "15,99 €",
      image: "assets/veg3.png",
      description: "Gebratener Tofu mit Gemüse",
      contains: "Soja"
    },
    {
      id: 64,
      name: "Yis Purcak Kormasi Beilage: Reis",
      price: "15,99 €",
      image: "assets/veg3.png",
      description: "Bohnen und getrocknete Paprika",
      contains: ""
    },
    {
      id: 65,
      name: "Pidigen Kormasi Beilage: Reis",
      price: "15,99 €",
      image: "assets/veg3.png",
      description: "Auberginen, grüne und rote Paprika",
      contains: ""
    }

  ],

  kindergerichte: [
    {
      id: 70,
      name: "Pommes",
      price: "5,00 €",
      image: "assets/kind1.png",
      description: "",
      contains: ""
    },
    {
      id: 71,
      name: "Nuggets",
      price: "7,00 €",
      image: "assets/kind2.png",
      description: "",
      contains: "Gluten"
    },
    {
      id: 72,
      name: "Pommes & Nuggets",
      price: "9,99 €",
      image: "assets/kind3.png",
      description: "",
      contains: "Gluten"
    }
  ],

  beilagen: [
    {
      id: 6,
      name: "Reis",
      price: "3,00 €",
      image: "assets/kind1.png",
      description: "",
      contains: ""
    },
    {
      id: 7,
      name: "Nudeln",
      price: "3,00 €",
      image: "assets/kind2.png",
      description: "",
      contains: "Gluten"
    }
  ],


  Kaffespezialiäten: [
    {
      id: 83,
      name: "Uigur Tee (Kanne)",
      price: "5,90 €",
      image: "assets/getraenk4.png",
      description: "",
      contains: ""
    },
    {
      id: 84,
      name: "Cappuccino",
      price: "3,50 €",
      image: "assets/getraenk5.png",
      description: "",
      contains: "Milch"
    },
    {
  id: 85,
  name: "Espresso",
  price: "2,20 €",
  image: "assets/getraenk1.png",
  description: "",
  contains: ""
},
{
  id: 86,
  name: "Double Espresso",
  price: "3,20 €",
  image: "assets/getraenk2.png",
  description: "",
  contains: ""
},
{
  id: 87,
  name: "Americano",
  price: "2,90 €",
  image: "assets/getraenk3.png",
  description: "",
  contains: ""
},
{
  id: 89,
  name: "Caffè Latte",
  price: "3,80 €",
  image: "assets/getraenk5.png",
  description: "",
  contains: "Milch"
},
{
  id: 90,
  name: "Latte Macchiato",
  price: "3,90 €",
  image: "assets/getraenk6.png",
  description: "",
  contains: "Milch"
}

    
  ],



  getraenke: [
    {
      id: 80,
      name: "Fritz Sorten",
      price: "3,50 €",
      image: "assets/getraenk1.png",
      description: "Sorten: Kola Original, Super-Zero, Orange, Mischmasch, Apfelschorle",
      contains: ""
    },
    {
      id: 81,
      name: "Elephant Bay - Sorten",
      price: "3,50 €",
      image: "assets/getraenk2.png",
      description: "Peach, Pomegranate, Blueberry, Exotic, Lemon",
      contains: ""
    },
    {
      id: 82,
      name: "Ayran",
      price: "3,00 €",
      image: "assets/getraenk3.png",
      description: "",
      contains: "Milch"
    },
{
  id: 91,
  name: "Teinacher Wasser Naturell (0,33L)",
  price: "3,00 €",
  image: "assets/getraenk7.png",
  description: "",
  contains: ""
},
{
  id: 92,
  name: "Teinacher Wasser Naturell (0,75L)",
  price: "5,00 €",
  image: "assets/getraenk8.png",
  description: "",
  contains: ""
},
{
  id: 93,
  name: "Teinacher Wasser Classic (0,33L)",
  price: "3,00 €",
  image: "assets/getraenk9.png",
  description: "",
  contains: ""
},
{
  id: 94,
  name: "Teinacher Wasser Classic (0,75L)",
  price: "5,00 €",
  image: "assets/getraenk10.png",
  description: "",
  contains: ""
}
  ]
};



// Create Menu


function createMenuSection(title, items) {
  return `
    <section class="accordion-section">
      <button class="accordion-toggle" aria-expanded="false">
        <span>${title}</span>
        <span class="accordion-icon">&#9660;</span>
      </button>
      <div class="accordion-body">
        <div class="menu-grid">
          ${items.map(item => `
            <div class="menu-item">
              <div class="menu-flip-inner">

                <div class="menu-flip-front">

                  <div class="menu-image-wrapper">
                  <img class=menu-flip-front_img src="assets/yemekler/${item.id}.png" alt="${item.name} ">
                  </div>


                  
                  <h4>${item.id}.${item.name}</h4>
                  <h4>Preis: ${item.price}</h4>
                  <p class="hint">Tippe auf die Karte für mehr Details </p>
                </div>

                <div class="menu-flip-back">
                  <h4>${item.name}</h4>
                  <p>${item.description}</p>
                  ${item.contains ? `<p>Enthält: ${item.contains}</p>` : ""}
                  <h4 class="hint">Tippen für Preis-Info</h4>
                  <img class="card-logo-back" src="assets/logo.png" alt="Logo">
                </div>

              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

// Accordion Toggle (event delegation, works for dynamically created sections)
document.addEventListener("click", function(e) {
  const toggle = e.target.closest(".accordion-toggle");
  if (!toggle) return;

  const section = toggle.closest(".accordion-section");
  const body = section.querySelector(".accordion-body");
  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", !isOpen);
  body.style.maxHeight = isOpen ? "0" : body.scrollHeight + "px";
  toggle.classList.toggle("open", !isOpen);
});

const menuContainer = document.getElementById("menu");

menuContainer.innerHTML =
  createMenuSection("Vorspeisen", menuData.vorspeisen) +
  createMenuSection("Hauptgerichte", menuData.hauptgerichte) +
  createMenuSection("Nudelgerichte", menuData.nudelgerichte) +
  createMenuSection("Reisgerichte", menuData.reisgerichte)+
  createMenuSection("Spezialgerichte", menuData.spezialgerichte)+
  createMenuSection("Vegetarisch", menuData.vegetarisch)+ 
  createMenuSection("Kindergerichte", menuData.kindergerichte)+
  createMenuSection("Beilagen", menuData.beilagen)+
  createMenuSection("Getränke", menuData.getraenke)+
  createMenuSection("Tee & Kaffespezialiäten", menuData.Kaffespezialiäten);





// Click On FlipCard


document.addEventListener("click", function (e) {
  const card = e.target.closest(".menu-item");

  // Klick außerhalb → alle schließen
  if (!card) {
    document.querySelectorAll(".menu-item.active")
      .forEach(item => item.classList.remove("active"));
    return;
  }

  // Optional: nur eine Karte gleichzeitig offen
  document.querySelectorAll(".menu-item.active")
    .forEach(item => {
      if (item !== card) item.classList.remove("active");
    });

  // Toggle aktuelle Karte
  card.classList.toggle("active");
});
