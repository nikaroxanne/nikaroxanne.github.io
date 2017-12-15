//var cnv; 

/*
function centerCanvas() {
	var x = (windowWidth -width) /2;
	var y = (windowHeight -height) /2;
	cnv.position(x,y);
}
*/
var points = [];
var img;

function setup() {
	var canvas = createCanvas(500,500); 
  canvas.parent('sketch1');
  img = loadImage("/assets/images/163images/nikaInitialImage.jpg");
  background(0); 
  noStroke(); 
    //for each point, call edge.draw to draw edges connecting all consecutive points
}

function convolution(x, y, matrixsize, img){
  var brightnessavg = 0.0;
  var offset = matrixsize/2;
  for (var i=0; i<matrixsize; i++){
    for(var j=0; j<matrixsize; j++){
      var xloc = (x+i) - offset;
      var yloc = (y-j) - offset;
      var loc = xloc + img.width*yloc;
      var mid = x + y*img.width;
      loc = constrain(loc, 0, img.pixels.length-1);
      brightnessavg += abs((brightness(img.pixels[mid]))- ((brightness(img.pixels[loc]))));
      //print(brightnessavg);    
    }
  }
  brightnessavg /= 9.00;
  brightnessavg = constrain(brightnessavg,0,255);
}



function draw() {
  img.loadPixels();
  var height = img.height;
  var width = img.width;
  var diff = 0.0;
  var matrixsize = 3;
  for (var x=0; x < width; x++){
    for (var y=0; y < height; y++){
      //int pix = x + y*img.width;
      diff = convolution(x,y,matrixsize,img);
      if ((diff > 25) && (diff < 40)) {
        points.push(new Point(x,y));
      }
    }
  }
  updatePixels();
  for(var i=0; i < points.length; i++){
    points[i].display();
  }
  // put drawing code here
}


 function Point(x, y){
   this.x = x;
   this.y = y;
  
    this.display() = function() {
      noStroke();
      fill(0,0,0);
      triangle(x, y, x+5, y+5, x+5, y);
    }
}

/*
function windowResized() {
	centerCanvas();
}
*/