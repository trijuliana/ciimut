// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sedebar untuk menghilangkan navbar

const mwenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
