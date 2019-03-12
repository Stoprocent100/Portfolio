const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const dropMenu = document.querySelector(".nav-drop");
const dropList = document.querySelector(".nav-drop__list");

//burger nav
burger.addEventListener("click", function () {
  nav.classList.toggle("show");
  burger.classList.toggle("active");
});
//dropdown 

dropMenu.addEventListener("click", function () {
  if (innerWidth < 992) {

    dropList.classList.toggle("show");
  }

});

// Banner slide


const slideList = [{
    img: "img/img1.jpeg",
  },
  {
    img: "img/img2.jpeg",
  }

];

const image = document.querySelector('.banner__img');
const h1 = document.querySelector('.banner__title');
// Interfejs
const time = 12000;
let active = 0;

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
}
let indexInterval = setInterval(changeSlide, time)