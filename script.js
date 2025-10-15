// Fade in Hero text
window.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h1");
  const heroText = document.querySelector(".hero p");
  const heroBtn = document.querySelector(".hero .btn");

  heroTitle.style.opacity = 0;
  heroText.style.opacity = 0;
  heroBtn.style.opacity = 0;

  setTimeout(() => { heroTitle.style.transition = "1s"; heroTitle.style.opacity = 1; }, 500);
  setTimeout(() => { heroText.style.transition = "1s"; heroText.style.opacity = 1; }, 1000);
  setTimeout(() => { heroBtn.style.transition = "1s"; heroBtn.style.opacity = 1; }, 1500);
});
