
// Creates an array that lists out all of the letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Sets the computerGuess variable equal to a random choice from the letters array.

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
var randomNum  = Math.floor(Math.random()*26);

var wins = 0;
var losses = 0;
var guessesLeft = 9;





// When the user presses a key, it will run the following function... 
	 
	 document.onkeyup = function(event) {
	 var userGuess = event.key;
	 console.log("user guess", userGuess);


	 	
	 		if (userGuess === computerGuess) {
	 			 wins++;
	 	         document.getElementById("wins-display").textContent = wins;
	 	         document.getElementById("guesses-left").innerHTML = 9;
	 	         computerGuess = letters[Math.floor(Math.random() * letters.length)];
	 	         console.log(computerGuess);
	 	         document.getElementById("user-guesses").innerHTML = "";
	 	         guessesLeft = 9;
  
	 		}
	 	      
	 	    

		else if (userGuess !== computerGuess) {
			
					guessesLeft--;
					document.getElementById("user-guesses").innerHTML = document.getElementById("user-guesses").innerHTML  + event.key + " , ";
					

					if (guessesLeft <= 0){

						losses++;
						guessesLeft = 9;
						computerGuess = letters[Math.floor(Math.random() * letters.length)];
	 	         console.log(computerGuess);
	 	         document.getElementById("user-guesses").innerHTML = "";

						
					}
					document.getElementById("guesses-left").innerHTML = guessesLeft;
					document.getElementById("losses-display").innerHTML = losses;



					
			
		}

	}

	














