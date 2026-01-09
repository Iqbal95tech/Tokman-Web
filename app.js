document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("active");
  });

  // Tutup menu saat klik link (opsional, bagus untuk UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("active");
    });
  });
});
