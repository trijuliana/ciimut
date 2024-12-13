// Toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik

document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active untuk search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
// klik di luar elemen

const meenu = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.styles.display = "flex";
  e.preventDefault();
};
