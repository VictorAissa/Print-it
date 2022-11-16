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
dotsArray[0].classList.add("dot_selected");

let displayedSlide = 0;
let nonDisplayedSlide;

function rightSlideShow() {
    if (displayedSlide < slides.length - 1) {
        displayedSlide++;
    } else {
        displayedSlide = 0;
    }
    document.slide.src = slides[displayedSlide];

    let activeDot = dotsArray[displayedSlide];
    if (0 < displayedSlide) {
        nonDisplayedSlide = displayedSlide - 1;
    } else {
        nonDisplayedSlide = slides.length - 1;
    }
    let previousDot = dotsArray[nonDisplayedSlide];
    activeDot.classList.add("dot_selected");
    previousDot.classList.remove("dot_selected");
}

function leftSlideShow() {
    if (displayedSlide > 0) {
        displayedSlide--;
    } else {
        displayedSlide = slides.length - 1;
    }
    document.slide.src = slides[displayedSlide];

    let activeDot = dotsArray[displayedSlide];
    if (displayedSlide < slides.length - 1) {
        nonDisplayedSlide = displayedSlide + 1;
    } else {
        nonDisplayedSlide = 0;
    }
    let previousDot = dotsArray[nonDisplayedSlide];
    activeDot.classList.add("dot_selected");
    previousDot.classList.remove("dot_selected");
}

leftArrow.addEventListener("click", function () {
    leftSlideShow();
});

rightArrow.addEventListener("click", function () {
    rightSlideShow();
});
