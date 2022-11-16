// initialize the options array
var options = [
    "rock",
    "paper",
    "scissors"
];

// Within a selection of options choose a random of the 3 options and return that as computerChoice
function getComputerChoice() {
    var computerChoice = options[Math.floor(Math.random())*(options.length-1)] // Math.random returns a random number between 0 (inclusive) and 1 (exclusive)...importantly its always lower than 1, Math.floor(Math.random) makes it return an integer * by whatever (n-1) where n is desired number; options.lentgh returns the length of options which is 3
    return computerChoice
}

// Function that plays a single round of RockPaperScissors.
// The function takes two params: playerSelection and computerSelection
// returns a sting that declares the winner of the round



function roundOfGame(playerSelection,computerSelection) {
    //gets computer choice
    var computerChoice = getComputerChoice()

    var playerSelection = String(prompt("What is your selection?"))
    console.log(playerSelection)
    console.log(typeof(playerSelection))
}

roundOfGame();