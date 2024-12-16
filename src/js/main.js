var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

var cursor = document.querySelector(".cursor");

var onMouseMove = function (event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
  console.log("la souris a bougé");
};

document.addEventListener("mousemove", onMouseMove);
