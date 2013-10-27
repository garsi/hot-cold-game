$(document).ready(function() {

	//Generate a random number
	var answer = Math.floor((Math.random()*100)+1); 
	console.log(answer);


	//Ask player for their guess
	var guess = prompt("Pick a number between 1 and 100" + "");
		console.log(guess + " is the original guess")


	//???Validate player guess as proper value - needs to be every time submission is entered
	if(guess == NaN || guess == null || guess < 1 || guess > 100) {	
    	var guess = prompt("Try that again. Please enter a number between 1 and 100" + "");
	  } else {
	  	console.log("Guess submission is valid");
	  }


	//Check if player guess it too high or too low
	function guessinitial() {
		if(guess == answer){
			confirm("Hey hot stuff, you win!");
		} else if(guess < answer) {
			var newGuess = prompt("too low, try again" + "");
		} else {
			var newGuess = prompt("too high, try again" + "");
		}
		console.log(newGuess + " is the new guess");
		window.newGuess = newGuess;
		}

	guessinitial();
	

	//Check distance of original and new guesses to the answer
	var distanceOrigin = Math.abs(guess-answer);
		console.log(distanceOrigin + " is original guess distance");

	var distanceNew = Math.abs(newGuess-answer);
		console.log(distanceNew + " is new guess distance");


	//Compare difference of guesses
	function guesses() {
		if(distanceNew == 0) {
			confirm("you win!");
		} else if(distanceNew <= distanceOrigin) {
			var newGuess = prompt("Getting warmer, try again" + "");
		} else {
			var newGuess = prompt("Getting colder, try again" + "");
		}

		console.log(newGuess + " is the new guess");
		window.newGuess = newGuess;
	}

	guesses();

	var distanceOrigin = distanceNew;
		console.log(distanceOrigin + " is now previous guess distance");
	
	var distanceNew = Math.abs(newGuess-answer);
		console.log(distanceNew + " is newest guest distance");

	while(newGuess-distanceNew !== 0) {
		guesses();
	}
	console.log("You win!");

});