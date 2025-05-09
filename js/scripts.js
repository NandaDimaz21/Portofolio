//typing effect
var type = new Typed(".typing", {
    strings: ["Freelance Web Developer", "Junior Front End", "Learner"],
    typeSpeed: 50,
    backSpeed: 75,
    loop: true
    }
)

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

//controls
function plusSlides(n) {
    showSlides(slideIndex+= n);
}

//thumbnail
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slider = document.getElementsByClassName("slides");
    if (n > slider.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slider.length;
    }
    for (let i=0; i<slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex - 1].style.display = "block";
}