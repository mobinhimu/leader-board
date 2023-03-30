const menu = document.querySelector(".menu i");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("single__header-toggle");
});
