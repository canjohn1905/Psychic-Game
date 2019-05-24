
// create options//
var computerChoices = ["a", "b", "c", "d", "e"];

//create the count//
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//get the tag from previous HW // create actions
document.onkeyup = function (event) {

    var userGuess = event.key;
    //console.log("this is my key" + userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // var options = ["a", "b", "c", "d"];

   // if (computerChoices.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses++;
            guessChoices = [];


        }
   // }

    console.log(computerGuess + " " + userGuess);

    document.getElementById("win").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = numGuesses;
    document.getElementById("yourguesses").textContent = guessChoices;



}

