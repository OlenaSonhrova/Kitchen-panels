
/* ======================================================================
This script handles the functionality of the burger menu. 
When the burger menu is clicked, it toggles the visibility of the header menu 
and locks/unlocks the body to prevent scrolling while the menu is open.
====================================================================== */


document.addEventListener('DOMContentLoaded', function () {
	var burgerMenu = document.querySelector('.burger__menu');
	var headerMenu = document.querySelector('.header__menu');
	var body = document.body;

	burgerMenu.addEventListener('click', function (event) {
		burgerMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
});



/* ======================================================================
This script controls the functionality of the slider menu.
====================================================================== */


let currentSlideIndex = 1; // Current slide index
displaySlide(currentSlideIndex);

// Function to switch slides forward or backward
function changeSlide(step) {
	displaySlide(currentSlideIndex += step);
}

// Function to display the desired slide
function displaySlide(slideNumber) {
	let slideElements = document.getElementsByClassName("review__item");
	let totalSlides = slideElements.length;

	// Check slide boundaries
	if (slideNumber > totalSlides) {
		currentSlideIndex = 1; // if greater than the last, go to the first
	}
	if (slideNumber < 1) {
		currentSlideIndex = totalSlides; // If less than the first, go to the last
	}

	// Hide all slides
	for (let slide of slideElements) {
		slide.style.display = "none";
	}

	// Display the desired slide
	slideElements[currentSlideIndex - 1].style.display = "flex";
}
