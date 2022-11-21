const slides = [
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
];

const url = "assets/images/slideshow/";
let displayedSlide = 0;
let nonDisplayedSlide;

slides.forEach(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    document.querySelector(".dots").appendChild(dot);
});

const dotsArray = document.getElementsByClassName("dot");
dotsArray[displayedSlide].classList.add("dot_selected");

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

const rightSlideShow = () => {
    if (displayedSlide < slides.length - 1) {
        displayedSlide++;
    } else {
        displayedSlide = 0;
    }
    document.querySelector("#banner img").src =
        url + slides[displayedSlide].image;
    document.querySelector("#banner p").innerHTML =
        slides[displayedSlide].tagLine;

    let activeDot = dotsArray[displayedSlide];
    activeDot.classList.add("dot_selected");
    if (0 < displayedSlide) {
        nonDisplayedSlide = displayedSlide - 1;
    } else {
        nonDisplayedSlide = slides.length - 1;
    }
    let previousDot = dotsArray[nonDisplayedSlide];
    previousDot.classList.remove("dot_selected");
};

const leftSlideShow = () => {
    if (displayedSlide > 0) {
        displayedSlide--;
    } else {
        displayedSlide = slides.length - 1;
    }
    document.querySelector("#banner img").src =
        url + slides[displayedSlide].image;
    document.querySelector("#banner p").innerHTML =
        slides[displayedSlide].tagLine;

    let activeDot = dotsArray[displayedSlide];
    activeDot.classList.add("dot_selected");
    if (displayedSlide < slides.length - 1) {
        nonDisplayedSlide = displayedSlide + 1;
    } else {
        nonDisplayedSlide = 0;
    }
    let previousDot = dotsArray[nonDisplayedSlide];
    previousDot.classList.remove("dot_selected");
};

leftArrow.addEventListener("click", () => {
    leftSlideShow();
});

rightArrow.addEventListener("click", () => {
    rightSlideShow();
});
