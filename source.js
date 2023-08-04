let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("project");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'prev');
    }
    slides[slideIndex-1].classList.add('active');
    if (slideIndex-2 >= 0) {
        slides[slideIndex-2].classList.add('prev');
    } else {
        slides[slides.length-1].classList.add('prev');
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);

    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");

    prevButton.addEventListener("click", function() {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", function() {
        plusSlides(1);
    });
});
