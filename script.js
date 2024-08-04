let scrollContainer = document.querySelector(".projectBar");
let nextArrow1 = document.getElementById("nextArrow1");

nextArrow1.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400;
});