
/* ========================================
   1. MENÚ MÓVIL
======================================== */

const menuButton = document.querySelector(".menu-boton");
const menu = document.querySelector(".menu-principal");
const menuLinks = document.querySelectorAll(".menu-principal a");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("abierto");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("abierto");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ========================================
   2. ANIMACIONES AL HACER SCROLL
======================================== */

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  document.querySelectorAll(".aparecer").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".aparecer").forEach((element) => {
    element.classList.add("visible");
  });
}

/* ========================================
   3. TRADUCCIONES ESPAÑOL / INGLÉS
======================================== */

const traducciones = {
  en: {
    t1: "Home",
    t2: "Books",
    t3: "About me",
    t4: "Events",
    t5: "Contact",

    t6: "Young adult romantic fantasy",
    t7: "Stories where magic, love and destiny transform entire kingdoms",
    t8: "Discover my books",

    t9: "Published stories",
    t10: "My books",
    t11: "Discover Delaira's story in its Spanish and English editions.",

    t12: "Spanish edition",
    t13: "English edition",

    t14: "Delaira is twenty years old and has a past she has been trying to escape for far too long. When she enters a raffle that promises to change her life, she believes she may finally have the chance to leave her small, peaceful fishing village behind.",

    t15: "But what awaits her on the other side is far more dangerous than she ever imagined: rebels willing to do anything, a capricious princess, and a web of conspiracies that will draw her into a world where nothing is quite what it seems.",

    t16: "Amid the chaos, she meets him: a boy with caramel-coloured eyes and a name as elusive as the wind. He will guide her towards a truth impossible to ignore… and towards a magic beyond anything in the stories of her childhood.",

    t17: "As truth and lies begin to blur, Delaira must decide whom she can trust. While ancient powers awaken, she will discover that her destiny could change not only her own life… but the future of an entire kingdom.",

    t18: "“Hell is emerald green.”",
    t19: "Buy",
    t20: "Bookshops",

    t21: "The author",
    t22: "From Lanzarote to the worlds she imagines",

    t23: "Noelia Acuña Perdomo was born and raised in Lanzarote, an island where the Atlantic breeze carries as many stories as there are grains of sand. Her name, inspired by a song, seems to have shaped her destiny: she grew up with an artist's soul and a deep passion for storytelling in all its forms and colours.",

    t24: "A graduate in English Studies from the University of La Laguna, she combines her love of literature with her work as a secondary school English teacher, where she strives every day to inspire her students to discover the power of words and the worlds they contain.",

    t25: "Passionate about fantasy and romance, her stories combine the influence of English-language literary traditions with the cultural richness of the Canary Islands. Through magical worlds and meaningful human connections, she explores intense emotions and social themes.",

    t26: "She made her debut in 2025 with <em>Tale of Lilies</em>, her first novel in English. In 2026, the story reached Spanish-speaking readers through Algani Editorial under the title <em>Cuento de Lirios</em>.",

    t27: "When she's not writing…",

    t28: "You'll probably find her immersed in a good book, enjoying coffee at her favourite café, or attending ballet class, where her enthusiasm usually far exceeds her technique.",

    t29: "Events and appearances",

    t30: "June 2026",
    t31: "May 2026",
    t32: "May 2026",
    t33: "May 2026",
    t34: "June 2025",
    t35: "June 2025",

    t36: "Official launch of <em>Cuento de Lirios</em>",
    t37: "Interview with Biosfera TV",
    t38: "Lanzarote “Fiera” Book Fair",
    t39: "Santa Cruz Book Fair",
    t40: "Official launch of <em>Tale of Lilies</em>",
    t41: "Presentation of <em>Tale of Lilies</em> at IES Puerto del Carmen",

    t42: "Casa de la Cultura · Arrecife, Lanzarote",
    t43: "Playa Honda, Lanzarote",
    t44: "Arrecife, Lanzarote",
    t45: "Santa Cruz de Tenerife, Tenerife",
    t46: "Ermita de Tías · Tías, Lanzarote",
    t47: "Puerto del Carmen, Lanzarote",

    t48: "Contact",
    t49: "Let's talk",
    t50: "Thank you for visiting my little corner of the world.",
    t51: "If you'd like to get in touch, I'd be delighted to hear from you.",

    
t52: "© 2026 Noelia Acuña Perdomo. All rights reserved.",
t53: "October 2026",
t54: "La Laguna Book Fair",
t55: "San Cristóbal de La Laguna, Tenerife"

t56: "October 2026",
t57: "Book Signing at Arangaybo Bookshop",
t58: "Las Palmas de Gran Canaria"

  }
};

/* ========================================
   4. GUARDAR TEXTOS ORIGINALES
======================================== */

const textosOriginales = {};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const clave = element.getAttribute("data-i18n");
  textosOriginales[clave] = element.innerHTML;
});

/* ========================================
   5. CAMBIAR IDIOMA
======================================== */

function cambiarIdioma(idioma) {
  const idiomaValido = idioma === "en" ? "en" : "es";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const clave = element.getAttribute("data-i18n");

    if (idiomaValido === "en" && traducciones.en[clave] !== undefined) {
      element.innerHTML = traducciones.en[clave];
    } else if (textosOriginales[clave] !== undefined) {
      element.innerHTML = textosOriginales[clave];
    }
  });

  document.documentElement.lang = idiomaValido;

  document.title =
    idiomaValido === "en"
      ? "Noelia Acuña Perdomo | Romantic Fantasy Author | Official Website"
      : "Noelia Acuña Perdomo | Autora de fantasía romántica | Sitio oficial";

  const descripcion = document.querySelector('meta[name="description"]');

  if (descripcion) {
    descripcion.content =
      idiomaValido === "en"
        ? "Official website of Noelia Acuña Perdomo, romantic fantasy author. Discover Cuento de Lirios, Tale of Lilies, her biography and contact information."
        : "Sitio web oficial de Noelia Acuña Perdomo, autora de fantasía romántica. Descubre Cuento de Lirios, Tale of Lilies, su biografía y contacto.";
  }

  document.querySelectorAll(".selector-idioma button").forEach((boton) => {
    const seleccionado = boton.dataset.lang === idiomaValido;
    boton.setAttribute("aria-pressed", String(seleccionado));
  });

  if (menuButton) {
    menuButton.setAttribute(
      "aria-label",
      idiomaValido === "en" ? "Open menu" : "Abrir menú"
    );
  }

  try {
    localStorage.setItem("idioma-web-noelia", idiomaValido);
  } catch (error) {
    // El selector funciona aunque el almacenamiento esté bloqueado.
  }
}

/* ========================================
   6. ACTIVAR BOTONES ES / EN
======================================== */

document.querySelectorAll(".selector-idioma button").forEach((boton) => {
  boton.addEventListener("click", () => {
    cambiarIdioma(boton.dataset.lang);
  });
});

/* ========================================
   7. RECORDAR EL IDIOMA ELEGIDO
======================================== */

let idiomaGuardado = "es";

try {
  idiomaGuardado = localStorage.getItem("idioma-web-noelia") || "es";
} catch (error) {
  idiomaGuardado = "es";
}

cambiarIdioma(idiomaGuardado);
