let scrollContainer1 = document.querySelector(".projectBar");
let scrollContainer2 = document.querySelector(".gallery");


nextArrow1.addEventListener("click", () => {
    scrollContainer1.scrollTo({
        left: scrollContainer1.scrollLeft + 300,
        behavior: "smooth"
    });
});

backArrow1.addEventListener("click", () => {
    scrollContainer1.scrollTo({
        left: scrollContainer1.scrollLeft - 300,
        behavior: "smooth"
    });
});

nextArrow2.addEventListener("click", () => {
    scrollContainer2.scrollTo({
        left: scrollContainer2.scrollLeft + 300,
        behavior: "smooth"
    });
});

backArrow2.addEventListener("click", () => {
    scrollContainer2.scrollTo({
        left: scrollContainer2.scrollLeft - 300,
        behavior: "smooth"
    });
});

const popupContainer = document.querySelector('.popup-container');
const popupImage = document.getElementById("popup");
const xButton = document.getElementById("xButton");

document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener("click", () => {
        popupImage.src = image.getAttribute('src');
        popupContainer.style.display = "flex";
    });
});

xButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
});