const header = document.querySelector("header");
const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".navbar-toggler-icon");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navBrand = document.querySelector(".navbar-brand");

window.onscroll = () => {
  if (window.scrollY > 927) {
    header.className = "fixed-top bg-white shadow-lg";
    navLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
      link.classList.add("scroll");
    });
    navBrand.classList.remove("text-white");
    navBrand.classList.add("text-black");
    navBar.classList.remove("py-4");
    navBar.classList.add("py-2");
    navToggler.classList.add("invert");
  } else {
    navLinks.forEach((link) => {
      link.classList.add("text-white");
      link.classList.remove("text-black");
      link.classList.remove("scroll");
    });
    header.className = "absolute-top";
    navBrand.classList.remove("text-black");
    navBrand.classList.add("text-white");
    navBar.classList.add("py-4");
    navBar.classList.remove("py-2");
    navToggler.classList.remove("invert");
  }
};
