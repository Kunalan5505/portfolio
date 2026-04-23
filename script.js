const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-card, .card, .skill-card, .project-card, .contact-box, .footer-box"
);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

revealItems.forEach((item) => item.classList.add("reveal"));

const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);