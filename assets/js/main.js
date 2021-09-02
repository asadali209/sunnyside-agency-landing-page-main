const menuOpen = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
});
