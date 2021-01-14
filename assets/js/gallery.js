/*gallery.js*/

/*
function openModal(n) {
	var modal_index = String(n);
	console.log(modal_index);
	var modal_name= 'myModal_aluminum_";
	var modal_id = modal_name.concat(modal_index);
	console.log(modal_id);
	document.getElementById(modal_id).style.display = "block";
}
*/
function openModal_aluminum_0() {
	document.getElementById('myModal_aluminum_0').style.display = "block";
}


function openModal_aluminum_1() {
	document.getElementById('myModal_aluminum_1').style.display = "block";
}

function openModal_aluminum_2() {
	document.getElementById('myModal_aluminum_2').style.display = "block";
}

function openModal_aluminum_3() {
	document.getElementById('myModal_aluminum_3').style.display = "block";
}

function openModal_aluminum_4() {
	document.getElementById('myModal_aluminum_4').style.display = "block";
}

/*
function closeModal() {
	document.getElementById('myModal_aluminum_0').style.display = "none";
	document.getElementById('myModal_aluminum_1').style.display = "none";
	document.getElementById('myModal_aluminum_2').style.display = "none";
	document.getElementById('myModal_aluminum_3').style.display = "none";
	document.getElementById('myModal_aluminum_4').style.display = "none";
}
*/

function closeModal_0() {
	document.getElementById('myModal_aluminum_0').style.display = "none";
}
function closeModal_1() {
	document.getElementById('myModal_aluminum_1').style.display = "none";
}
function closeModal_2() {
	document.getElementById('myModal_aluminum_2').style.display = "none";
}
function closeModal_3() {
	document.getElementById('myModal_aluminum_3').style.display = "none";
}
function closeModal_4() {
	document.getElementById('myModal_aluminum_4').style.display = "none";
}

var slideIndex = 1;
showSlides_aluminum_0(slideIndex);
showSlides_aluminum_1(slideIndex);
showSlides_aluminum_2(slideIndex);
showSlides_aluminum_3(slideIndex);
showSlides_aluminum_4(slideIndex);

/*
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}
*/

function currentSlide_aluminum_0(n) {
	showSlides_aluminum_0(slideIndex = n);
}

function currentSlide_aluminum_1(n) {
	showSlides_aluminum_1(slideIndex = n);
}

function currentSlide_aluminum_2(n) {
	showSlides_aluminum_2(slideIndex = n);
}

function currentSlide_aluminum_3(n) {
	showSlides_aluminum_3(slideIndex = n);
}

function currentSlide_aluminum_4(n) {
	showSlides_aluminum_4(slideIndex = n);
}


//function showSlides(n) {
function showSlides_aluminum_0(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides_aluminum_0");
	var arrows = document.getElementsByClassName("aluminum_0");
	var captionText = document.getElementById("caption_aluminum_0");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1 ) {slideIndex = slides.length};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
}


function showSlides_aluminum_1(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides_aluminum_1");
	var arrows = document.getElementsByClassName("aluminum_1");
	var captionText = document.getElementById("caption_aluminum_1");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1 ) {slideIndex = slides.length};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
}

function showSlides_aluminum_2(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides_aluminum_2");
	var arrows = document.getElementsByClassName("aluminum_2");
	var captionText = document.getElementById("caption_aluminum_2");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1 ) {slideIndex = slides.length};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
}

function showSlides_aluminum_3(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides_aluminum_3");
	var arrows = document.getElementsByClassName("aluminum_3");
	var captionText = document.getElementById("caption_aluminum_3");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1 ) {slideIndex = slides.length};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
}

function showSlides_aluminum_4(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides_aluminum_4");
	var arrows = document.getElementsByClassName("aluminum_4");
	var captionText = document.getElementById("caption_aluminum_4");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1 ) {slideIndex = slides.length};
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < arrows.length; i++) {
		arrows[i].className = arrows[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	arrows[slideIndex-1].className += " active";
	captionText.innerHTML = arrows[slideIndex-1].alt;
}
