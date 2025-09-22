document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav ul");
  const header = document.getElementById("header");

  // Alterna o menu mobile com transição
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Efeito de entrada suave nas seções
  const sections = document.querySelectorAll(".section");
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  // Transparência no header ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });
});
