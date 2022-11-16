/*const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];*/

const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];

const leftArrow = document.getElementsByClassName("arrow_left")[0];

const rightArrow = document.getElementsByClassName("arrow_right")[0];

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    document.getElementsByClassName("dots")[0].appendChild(dot);
    dot.classList.add("dot");
}

const dotsArray = document.getElementsByClassName("dot");
let activeDot = dotsArray[0];
activeDot.classList.add("dot_selected");

let i = 0;
document.slide.src = slides[i];

function rightSlideShow() {
    document.slide.src = slides[i];
    if (i < slides.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

function leftSlideShow() {
    document.slide.src = slides[i];
    if (i > 0) {
        i--;
    } else {
        i = slides.length - 1;
    }
}

leftArrow.addEventListener("click", function () {
    leftSlideShow();
});

rightArrow.addEventListener("click", function () {
    rightSlideShow();
});
