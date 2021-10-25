const schemeSvg = document.querySelector(".scheme-svg");
const totapPriceTag = document.querySelector(".price-counter");
const mMenu = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("occupied")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totapPriceTag.textContent = totalPrice;
  }
});
mMenu.addEventListener("click", () => {
    menu.classList.toggle("is-open");

});
