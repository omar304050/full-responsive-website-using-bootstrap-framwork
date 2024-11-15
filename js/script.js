const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#logo");
const mouse = document.querySelector(".mouse");
const carousel = document.querySelector(".carousel-indicators");
const carouselImg = document.querySelectorAll(".carousel-indicators img");

window.addEventListener("scroll", changNavColor);

function changNavColor() {
  if (window.scrollY > 150) {
    navbar.classList.replace("navbar-default", "navbar-scroll");
    logo.setAttribute("src", "./image/logo-red.png");
    mouse.classList.replace("opacity-100", "opacity-0");
  } else {
    navbar.classList.replace("navbar-scroll", "navbar-default");
    logo.setAttribute("src", "./image/logo-white.png");
    mouse.classList.replace("opacity-0", "opacity-100");
  }
}

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        infinity: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        infinity: true,
        slidesToShow: 1,
      },
    },
  ],
});


