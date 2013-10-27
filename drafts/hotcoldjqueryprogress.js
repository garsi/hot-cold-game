$(document).ready(function() {

	//Generate a random number
	var answer = Math.floor((Math.random()*100)+1); 
	console.log(answer);

	//Ask player for their guess
	function startGame() {
		$("#submit").click(function() {  
		var guess = $('#playerguess').val();
			console.log(guess + " is the original guess")
	//var guess = prompt("Pick a number between 1 and 100" + "");
		window.guess = guess;
		guessInitial();
		});
	}
	startGame();


	//???Validate player guess as proper value
	/*if(guess == NaN || guess == null || guess < 1 || guess > 100) {	
    	var guess = prompt("Try that again. Please enter a number between 1 and 100" + "");
	  } else {
	  	console.log("Guess submission is valid");
	  }*/


	//Check if player guess it too high or too low
	function guessInitial() {
		if(guess == answer){
			confirm("Hey hot stuff, you win!");
		} else if(guess < answer) {
			confirm("too low, try again");
			var newGuess = $('#playerguess').val(); 
		} else {
			confirm("too high, try again");
			var newGuess = $('#playerguess').val(); 
		}
		console.log(newGuess + " is the new guess");
		window.newGuess = newGuess;
		}
	

	//Check distance original and new guesses to the answer
	var distanceOrigin = Math.abs(guess-answer);
		console.log(distanceOrigin + " is original guess distance");
	
	var distanceNew = Math.abs(newGuess-answer);
		console.log(distanceNew + " is new guess distance");


	//Compare difference of guesses
	while(distanceNew !== 0) {
		function guesses() {
			if(distanceNew <= distanceOrigin) {
				confirm("Getting warmer, try again");
				var newGuess = $('#playerguess').val(); 
			} else {
				confirm("Getting colder, try again");
				var newGuess = $('#playerguess').val(); 
			}

			console.log(newGuess + " is the new guess");
			window.newGuess = newGuess;
		}

		guesses();

		var distanceOrigin = distanceNew;
			console.log(distanceOrigin + " is now previous guess distance");
		
		var distanceNew = Math.abs(newGuess-answer);
			console.log(distanceNew + " is newest guest distance");

	}

	confirm("you win!");

});