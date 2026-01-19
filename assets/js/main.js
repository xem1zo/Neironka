// Toggle mobile menu and smooth anchor scrolling
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("mobile-open");
    menu.classList.toggle("open");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      document.body.classList.remove("mobile-open");
      menu.classList.remove("open");
    }
  });
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
