
	//Compare difference of guesses
	function guesses() {
		if(distanceNew == 0){
			confirm("Hey hot stuff, you win!");
		} else if(distanceNew !==0 && distanceNew <= distanceOrigin) {
			var newGuess = prompt("Getting warmer, try again" + "");
		} else if(distanceNew !==0 && distanceNew > distanceOrigin) {
			var newGuess = prompt("Getting colder, try again" + "");
		} else {
			console.log("There's an error.");
		}
		console.log(newGuess);
		var distanceOrigin = distanceNew;
		console.log(distanceOrigin + " is now old distance");

		var distancenew = Math.abs(newGuess-answer);
		console.log(distanceNew);

	}

	//Continue guessing loop until answer is acheived
	while(newGuess-distancenew !== 0) {
		guesses(guess);
	}
	console.log("You win!");


	while(guess !== answer || newGuess-distancenew !== 0) {
		guesses();
	}

	var guess = $("input#guessbox").val();
		console.log(guess);
	});

var guess = prompt("Pick a number between 1 and 100" + "");
	console.log(guess)

//$('#displaywin').addclass('displaywin');

//var guess = prompt("Pick a number between 1 and 100" + "");
$('.shownumber').text(guess);

//Compare difference of guesses
	function guesses() {
		if(distancenew == 0){
			confirm("Hey hot stuff, you win!");
		} else if(distancenew < distanceorigin) {
			distancenew = distanceorigin;
			newGuess = guess;
			var newGuess = prompt("Getting warmer, try again" + "");
		} else {
			distancenew = distanceorigin;
			newGuess = guess;
			var newGuess = prompt("Getting colder, try again" + "");
		}
		console.log(guess + " is now old")
		console.log(newGuess + " is new")

		var distanceorigin = Math.abs(guess-answer);
		console.log(distanceorigin);

		var distancenew = Math.abs(newGuess-answer);
		console.log(distancenew);

	}



//Validate player guess as proper value
	var guess = function guessnumber() {
		document.forms['HotCold'].guessbox.value;
		console.log(guess);
});


$('#yourid').val();

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
	while(newGuess-distancenew !== 0) {
		guesses(guess);
	}
	console.log("You win!");

	//Continue guessing loop until answer is acheived
	//newGuess = guess;


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
*/