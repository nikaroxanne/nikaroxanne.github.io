/*gaussian.js*/
//var slider;

var img;
var imgMask;

function preload() {
  img = loadImage("assets/163images/nikaInitialImage.jpg");
  imgMask = loadImage("assets/163images/sobel.jpg");
}

function setup() {

  var canvas2 = createCanvas(600,600);
  canvas2.parent('sketch2');
  background(0); 
  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 153);
  image(img, width/2, height/2);
  image(img, mouseX, mouseY);
}
