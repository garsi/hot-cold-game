$(document).ready(function() {

	//Generate a random number
	var answer = Math.floor((Math.random()*100)+1); 
	console.log(answer);

	//Ask player for their guess
	//var guess = prompt("Pick a number between 1 and 100" + "");
	//console.log(guess);
	function guessnumber() {
		var guess = document.forms['HotCold'].answer.value;

	//Validate player guess as proper value



	//Check if player guess it too high or too low
		if(guess == answer) {
			console.log("You win!");
		} else if (guess < answer) {
			var newGuess = prompt("too low, try again" + "");
		} else {
			var newGuess = prompt("too high, try again" + "");
		};
		console.log(newGuess);
	}

	//Check difference of original and new guesses to the answer
	function differenceOriginal(answer, newGuess) { 
		return Math.abs(answer - newGuess);
	}
	console.log(differenceOriginal);

	function differenceNew(answer, guess) { 
		return Math.abs(answer - guess);
	}
	console.log(differenceNew);

	
	//Compare difference of guesses



	//Continue guessing loop until answer is acheived
	//newGuess = guess;



});

/*

		if(guess == answer) {
				alert("you win!");
			} else if(guess < answer){
				prompt("too low, try again" + "");
			} else {
				prompt("too high, try again" + "");
		}
	}


	while(guess!==answer) {
		if(guess < answer) {
			var guessLow = prompt("too high, try again" + "");
			guessLow = guess;
			console.log(guess);
		}else {
			var guessHigh = prompt("too low, try again" + "");
			guessHigh = guess;
			console.log(guess);
		}}
	
	if(guess == answer) {
		prompt("you win!");
	}

});





