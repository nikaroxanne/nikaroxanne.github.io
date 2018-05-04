/* siriOpenTinder.js */


//var canvas = document.getElementById('canvas');
var ctx = document.getElementById('canvas').getContext('2d');

var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 


var testCards = [];


//var width = canvas.width;
//var height = canvas.height;

function Card(x, y, width, height, color, id) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.id = id;
}

Card.prototype.draw = function(){
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
};


Card.prototype.update = function(){
	//this.y = this.y + 10;
	var numCards = testCards.length;
	var nextHeight = 1 + (Math.floor(numCards / 20));
	nextHeight = nextHeight * 10;
	this.y = this.y + nextHeight;
};

/*
function Buffer(array){

}

*/



document.getElementById("demo").innerHTML = cards + "</br>";

function start(){
	var cardsText = "";

	function shuffle(array){
		var m = array.length, t, i;

		while (m) {
			i = Math.floor(Math.random()  * m--);

			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}
	cards = shuffle(cards);
	//updateSpace();
	//loop();
	//shiftCards();
	console.log(testCards[0].color);
	testCards = shuffle(testCards);
	console.log(testCards[0].color);
	//checkCards();


	cardsText = "The shuffled array is " + cards + "</br>"
	document.getElementById("demo").innerHTML += cardsText ;


	redraw(testCards);
	//loop();
	//canvas.width = canvas.width + 50;
	//canvas.height = canvas.height + 50;
}



function updateSpace(array){
	var numCards = testCards.length;
	for(var i=0; i < numCards; i++){
		testCards[i].update();
		//testCards[i].update();
		//console.log(testCards[i].id);
	}
}


/*
function checkCards() {
	for(var i =0; i < testCards.length; i++){
		//console.log(testCards[i].color);
		console.log(testCards[i].id);
	}
}
*/


function addCard() {

	var nextIndex = (cards.length);
	var nextWidth = (cards.length % 20);
	var nextHeight = 1 + (Math.floor(nextIndex / 20));
	//var nextWidth = (nextIndex-1);
	var newCard = new Card(
		(10 * nextWidth),
		(10 * nextHeight),
		10,
		10,
		'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
		nextIndex
	)
	testCards.push(newCard);
	testCards[nextIndex].draw();
	//testCards[nextIndex].update();


	var nextNumCard = nextIndex + 1;
	cards.push(nextIndex);
	cardsUpdateText = "The new array is now " + cards + "</br>"
	document.getElementById("demo").innerHTML += cardsUpdateText ;


	//loop();
}

/*
function shiftCards() {
	var newLength = (cards.length);
	for(var i=0; i < newLength; i++){
		testCards[i].update();
	}
}
*/

function redraw(array) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
	ctx.fillRect(0, 0, 200, 200);

	var nextNewIndex = (cards.length);
	//var nextNewLength = nextNewIndex*2;
	//var nextNewWidth = (cards.length % 20);
	var nextNewHeight = (Math.floor(nextNewIndex / 20));

	console.log(testCards.length);

	ctx.save();
	for(var i=0; i < nextNewIndex; i++){
		//testCards[i].draw();
		
		ctx.translate(0, 10);
		testCards[i].update();
		testCards[i].draw();
		//ctx.restore();
		//testCards[i].update();
		//testCards[i].draw();
		console.log(testCards[i].color);
	}
	ctx.restore();
}
//redraw();

// random function ported from: 
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice

function random(min, max){
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}



function deck() {
	ctx.save();
	ctx.clearRect();
	ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
	ctx.fillRect(0, 0, 200, 200);

	var blockSize = 20;
	var nextNewIndex = (cards.length);
	var nextNewWidth = (cards.length % 20);
	var nextNewHeight = (Math.floor(nextNewIndex / 20));
	for (var j=0; j < blockSize; j++){
	//while(nextNewIndex < 21){
		var testCard = new Card(
			(10* j), 
			(10 * nextNewHeight), 
			10, 
			10, 
			'rgb(' + random(0,255) + ','  + random(0,255) + ',' + random(0, 255) + ')',
			//'rgb(' + (255 - (10*j)) + ',' + (0+ 10*j) + ',' + (0+ 10*j) + ')',
			j
		);
		testCards.push(testCard);
	}

	//console.log(testCards.length);
	ctx.save();
	for(var i=0; i < nextNewIndex; i++){
		//ctx.save();
		//ctx.translate(0, 10);
		testCards[i].update();
		testCards[i].draw();
		//ctx.restore();
		//testCards[i].update();
		//testCards[i].draw();
		console.log(testCards[i].color);
		//console.log(testCards[i].y);
	}
	ctx.restore();

	//requestAnimationFrame(loop);
	ctx.restore();
}
deck();



