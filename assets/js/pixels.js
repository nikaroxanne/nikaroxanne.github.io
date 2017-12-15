//var cnv; 

/*
function centerCanvas() {
	var x = (windowWidth -width) /2;
	var y = (windowHeight -height) /2;
	cnv.position(x,y);
}
*/

function setup() {
	var canvas = createCanvas(500,500); 
	canvas.parent('sketch1');
  	background(0); 
  	noStroke(); 

  	var gridSize = 50;

  	for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    	for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      	noStroke();
      	fill(255);
      	rect(x-1, y-1, 3, 3);
      	stroke(255, 50);
      	line(x, y, width/2, height/2);
    	}
  	}
}

function draw() {
  // put drawing code here
}

/*
function windowResized() {
	centerCanvas();
}
*/