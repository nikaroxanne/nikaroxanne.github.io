
/* siriOpenTinder old fragments */

	/*
	Card.prototype.update = function(){
	};
	*/

	//var testCards = [];




	/*
	var testCard1 = new Card(0, 0, 50, 50, 'red');
	var testCard2 = new Card(50, 0, 50, 50, 'orange');
	var testCard3 = new Card(100, 0, 50, 50, 'yellow');
	var testCard4 = new Card(150, 0, 50, 50, 'green');
	var testCard5 = new Card(200, 0, 50, 50, 'blue');
	*/

	/*
	testCard.x;
	testCard.y;
	testCard.width;
	testCard.height;
	testCard.color;
	*/

	/*
	testCard1.draw();
	testCard2.draw();
	testCard3.draw();
	testCard4.draw();
	testCard5.draw();
	*/


	/*
	console.log(testCards.length);
	for (i=0; i < testCards.length; i++){
		testCards[i].draw();
	}

	*/


	//var testCards = [];

	/*
	function startCards() {
		testCardsInit();
		testCardsDraw();
		//startShuffle();
	}
	startCards();
	*/

	/*
	function testCardsInit (){
		testCards.push = new Card(0, 0, 50, 50, 'red');
		testCards.push = new Card(50, 50, 50, 50, 'orange');
		testCards.push = new Card(100, 100, 50, 50, 'yellow');
		testCards.push = new Card(150, 150, 50, 50, 'green');
		testCards.push = new Card(200, 200, 50, 50, 'blue');
	}
	//testCardsInit();

	function testCardsDraw (){
		for(int i =0; i < testCards.length; i++) {
			testCards[i].draw();
		}
	}
	//testCardsDraw();

	*/

	

	//create an array of card objects, then pass it to shuffle function to shuffle cards
	//there won't be transitions but you can see squares of color move around

	/*cards[0] = document.getElementById("card1");
	cards[1] = document.getElementById("card2");
	cards[2] = document.getElementById("card3");
	cards[3] = document.getElementById("card4");
	cards[4] = document.getElementById("card5");
	*/



//testCardsInit();
	//testCardsDraw();

	
		/*

		var cardSquares = document.getElementsByClassName("card");
		var j;

		function shuffleCards(array){
			var m = array.length, t, i;

			while (m) {
				i = Math.floor(Math.random()  * m--);

				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}
		cards = shuffle(cardSquares);
		*/
	

/*
	function startCanvas() {
		//ctx.fillStyle = 'rgba(0,0,0, 0.25)';
		ctx.fillRect(0,0,width,height);

		
		for(int j =0; j < 5; j++) {
			var testCard = new Card(
				(100 * j),
				(100 * j),
				50,
				50,
				'red'
			);
			testCards.push(testCard);
		}
		

/*
		function testCardsInit() {
			testCards = [];
			testCards.push = new Card(0, 0, 50, 50, 'red');
			testCards.push = new Card(50, 50, 50, 50, 'orange');
			testCards.push = new Card(100, 100, 50, 50, 'yellow');
			testCards.push = new Card(150, 150, 50, 50, 'green');
			testCards.push = new Card(200, 200, 50, 50, 'blue');

			return testCards;
		}
*/
/*
		for(int i =0; i < testCards.length; i++) {
			testCards[i].draw();
		}

		requestAnimationFrame(startCanvas);
	}
*/


*/

	function redraw(array) {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
		ctx.fillRect(0, 0, 200, 200);
	
		var nextNewIndex = (cards.length);
		//var nextNewLength = nextNewIndex*2;
		//var nextNewWidth = (cards.length % 20);
		var nextNewHeight = (Math.floor(nextNewIndex / 20));

		/*
		for(var x=0; x < nextNewIndex; x++){
			//testCards[x].update();
			//testCards[x].draw();
			var testCard = new Card(
				testCards[x].x, 
				testCards[x].y,
				10, 
				10, 
				testCards[x].color,
				testCards[x].id
				//'rgb(' + random(0,255) + ','  + random(0,255) + ',' + random(0, 255) + ')',
				//'rgb(' + (255 - (10*j)) + ',' + (0+ 10*j) + ',' + (0+ 10*j) + ')',
				//x
			);
			testCards.push(testCard);
		}
		*/

		/*
		for (var j=nextNewIndex; j < nextNewLength; j++){
		//while(testCards.length < 5){
			var testCard = new Card(
				(10*nextNewWidth), 
				(10 * nextNewHeight), 
				10, 
				10, 
				'rgb(' + random(0,255) + ','  + random(0,255) + ',' + random(0, 255) + ')',
				//'rgb(' + (255 - (10*j)) + ',' + (0+ 10*j) + ',' + (0+ 10*j) + ')',
				j
			);
			testCards.push(testCard);
		}
		*/
		console.log(testCards.length);

		for(var i=0; i < nextNewIndex; i++){
			//testCards[i].draw();
			//testCards[i].update();
			testCards[i].draw();
			console.log(testCards[i].id);
		}
		

		//requestAnimationFrame(loop);
	}
	//redraw();


