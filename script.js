const menuButton = document.querySelector(".menu-boton");
const menu = document.querySelector(".menu-principal");
const menuLinks = document.querySelectorAll(".menu-principal a");

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
