/*gallery.js*/

var slideIndex = 1;
showSlides();


function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide() {
	showSlides(slideIndex = n);
}


function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var arrows = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (slideIndex > slides.length) {slideIndex = 1};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i=0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
	setTimeout (showSlides, 3000);

}