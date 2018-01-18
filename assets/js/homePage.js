var num = 2000;
var range = 6;

var ax = [];
var ay = [];


function setup() {
  var canvas = createCanvas(500,500); 
  canvas.parent('mainPage');
  background(0);
	for( var i = 0; i < num; i++){
		ax[i] = width / 2;
		ay[i] = height / 2;
	}
	frameRate(30);
}

function draw() {
	background(50);

	for (var i=1; i < num; i++) {
		ax[i-1] = ax[i];
		ay[i-1] = ay[i];
	}	
	ax[num -1] += random(-range, range);
	ay[num -1] += random(-range, range);

	ax[num -1] = constrain(ax[num-1], 0, width);
	ay[num -1] = constrain(ay[num-1], 0, height);

	for (var i=1; i < num; i++) {
		var val = j / num * 204.0 + 51;
		stroke(val);
		line(ax[j-1], ay[j-1],ax[j].ay[j]);
	}
}	
