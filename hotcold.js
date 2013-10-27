$(document).ready(function() {

	//Generate a random number
	var answer = Math.floor((Math.random()*100)+1); 
	console.log(answer);

	//Ask player for their guess
	function startGame() {
		$("#submit").click(function() {  
		var guess = $('#playerguess').val();
			window.guess = guess;
			validateGuess();
		});
	}
	startGame();

	//Validate player guess as proper value
	function validateGuess() {
		if(guess < 1 || guess > 100 || isNaN(guess)) {	
    	$('.error').removeClass('hide');
	  } else {
	  	console.log("Guess submission is valid: " + guess + " is the original guess");
	  	$('.error').addClass('hide');
	  	guessInitial();
	  }
	}

	//Check if player guess it too high or too low
	function guessInitial() {
		if(guess == answer){
			$('.sunstart').addClass('hide');
			$('.suncold').addClass('hide');
			$('.sunwarm').addClass('hide');
			$('.sunwin').removeClass('hide');
		} else if(guess < answer) {
			var newGuess = $('#playerguess').val();
			$('.sunstart').addClass('hide');
			$('.sunwarm').addClass('hide');
			$('.suncold').removeClass('hide');
		} else {
			var newGuess = $('#playerguess').val();
			$('.sunstart').addClass('hide');
			$('.suncold').addClass('hide');
			$('.sunwarm').removeClass('hide');
		}
		console.log(newGuess + " is the new guess");
		window.newGuess = newGuess;
		}

	//Restart the game with the replay button
	function replay() {
		$("#replay").click(function() {
			$('.sunwin').addClass('hide');
			$('.suncold').addClass('hide');
			$('.sunwarm').addClass('hide');
			$('.sunstart').removeClass('hide');
			$('.playagain').removeClass('hide');
		/*var guess = $('#playerguess').val();
			window.guess = guess;
			validateGuess();*/
		});
	}
	replay();
	

	/*//Check distance original and new guesses to the answer
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

	confirm("you win!");*/

});