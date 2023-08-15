const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('open')
    menuIcon.classList.toggle('open')
})

const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach (
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}