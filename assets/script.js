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

const leftArrow = document.getElementsByClassName("arrow_left")[0];

const rightArrow = document.getElementsByClassName("arrow_right")[0];

leftArrow.addEventListener("click", function () {
    alert("left");
});

rightArrow.addEventListener("click", function () {
    alert("right");
});

for (var i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    document.getElementsByClassName("dots")[0].appendChild(dot);
    dot.classList.add("dot");
}
