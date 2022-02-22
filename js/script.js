// * function to close the dropdown menu on smaller screens
function navLinkCloseMenu() {
  document.querySelector(".open").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".nav-links").style.top = "-50vh";
  document.querySelector(".dropdown-open").style.display = "inline-block";
  document.querySelector(".dropdown-close").style.display = "none";
  document.querySelector(".dropdown-links").style.display = "none";
}

// * function to open the dropdown menu on smaller screens
function navLinkOpenMenu() {
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".nav-links").style.top = "var(--nav-height)";
}

// * burger menu toggle
// select burger menu
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
menu.addEventListener("click", function () {
  if (document.querySelector(".open").style.display === "none") {
    navLinkCloseMenu();
  } else {
    navLinkOpenMenu();
  }
});

// * individual nav links
// todo function 1
// adding active state to current webpage viewed by the user.
// if current file path of webpage in view is same as the file path of the nav link that was clicked, then that nav link should have a class of .active.
// todo function 2
// when you click on any of the links, the dropdown menu should close

const navLinks = document.querySelectorAll(".nav-link");
for (let link of navLinks) {
  // function 1
  var path = window.location.href;
  if (link.href === path) {
    link.classList.add("active");
  }

  // function 2
  link.addEventListener("click", navLinkCloseMenu);
}

// * dropdown menu toggle
// select dropdown menu
const dropdownMenu = document.querySelector(".dropdown-menu");
// add event listener to toggle dropdown menu
dropdownMenu.addEventListener("click", function () {
  if (document.querySelector(".dropdown-open").style.display == "none") {
    document.querySelector(".dropdown-open").style.display = "inline-block";
    document.querySelector(".dropdown-close").style.display = "none";
    document.querySelector(".dropdown-links").style.display = "none";
  } else {
    document.querySelector(".dropdown-open").style.display = "none";
    document.querySelector(".dropdown-close").style.display = "inline-block";
    document.querySelector(".dropdown-links").style.display = "block";
  }
});
