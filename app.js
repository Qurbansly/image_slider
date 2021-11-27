const carouselSlide = document.querySelector(".carousel-slide");
const CarouselImage = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let index = 1;

const size = CarouselImage[0].clientWidth;


carouselSlide.style.transform='translateX('+(-size*index)+'px)';

nextBtn.addEventListener('click', ()=>{

    if(index >= CarouselImage.length - 1) return;
    carouselSlide.style.transition="transform 0.2s ease-in-out";
    index++;

    carouselSlide.style.transform = 'translateX('+(-size*index)+'px)';
});


prevBtn.addEventListener('click', ()=>{
    if(index <= 0) return;
    carouselSlide.style.transition="transform 0.2s ease-in-out";
    index--;

    carouselSlide.style.transform = 'translateX('+(-size*index)+'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(CarouselImage[index].id ==='lastimage'){
        carouselSlide.style.transition = 'none';
        index = CarouselImage.length-2;
        carouselSlide.style.transform='translateX('+(-size*index)+'px)';
    }
    if(CarouselImage[index].id ==='firstimage'){
        carouselSlide.style.transition = 'none';
        index = CarouselImage.length-index;
        carouselSlide.style.transform='translateX('+(-size*index)+'px)';
    }
});