// Fade in Hero text + buttons
window.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h1");
  const heroText = document.querySelector(".hero p");
  const heroBtns = document.querySelectorAll(".hero .btn");

  heroTitle.style.opacity = 0;
  heroText.style.opacity = 0;
  heroBtns.forEach(btn => btn.style.opacity = 0);

  setTimeout(() => { heroTitle.style.transition = "1s"; heroTitle.style.opacity = 1; }, 500);
  setTimeout(() => { heroText.style.transition = "1s"; heroText.style.opacity = 1; }, 1000);
  setTimeout(() => { 
    heroBtns.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.transition = "1s";
        btn.style.opacity = 1;
      }, i * 300);
    });
  }, 1500);
});
