const carouselSlide = document.querySelector(".carousel-slide");
const CarouselImage = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevbtn");
const nectBtn = document.querySelector("#nextbtn");

let index = 1;

const size = CarouselImage[0].clientWidth;


carouselSlide.style.transform=''