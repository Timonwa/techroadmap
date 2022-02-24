// * function to close the dropdown menu in main nav on smaller screens
function navLinkCloseMenu() {
  document.querySelector(".open").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".nav-links").style.top = "-50vh";
  document.querySelector(".dropdown-open").style.display = "inline-block";
  document.querySelector(".dropdown-close").style.display = "none";
  document.querySelector(".dropdown-links").style.display = "none";
}

// * function to open the dropdown menu in main nav on smaller screens
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

// * function to close the slide-in menu in sidebar nav on smaller screens
function sidebarLinkCloseMenu() {
  document.querySelector(".open-sidebar").style.display = "block";
  document.querySelector(".close-sidebar").style.display = "none";
  document.querySelector(".sidebar-links").style.right = "-120%";
}

// * function to open the slide-in menu in sidebar nav on smaller screens
function sidebarLinkOpenMenu() {
  document.querySelector(".open-sidebar").style.display = "none";
  document.querySelector(".close-sidebar").style.display = "block";
  document.querySelector(".sidebar-links").style.right = "0%";
}

// * burger menu toggle
// select burger menu
const sidebar = document.querySelector(".sidebar-toggle");
// add event listener to toggle sidebar menu
sidebar.addEventListener("click", function () {
  if (document.querySelector(".open-sidebar").style.display === "none") {
    sidebarLinkCloseMenu();
  } else {
    sidebarLinkOpenMenu();
  }
});

// * individual nav links
// todo function 1
// when you click on any of the links, the dropdown menu should close

const sidebarLinks = document.querySelectorAll(".sidebar-title");
for (let link of sidebarLinks) {
  // function 1
  link.addEventListener("click", sidebarLinkCloseMenu);
}
const sidebarSubLinks = document.querySelectorAll(".sidebar-subtitle");
for (let link of sidebarSubLinks) {
  // function 1
  link.addEventListener("click", sidebarLinkCloseMenu);
}
