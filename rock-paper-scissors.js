// Within a selection of options choose a random of the 3 options and return that as computerChoice
function getComputerChoice() {
    const OPTIONS = [
        "rock",
        "paper",
        "scissors"
    ];
    var computerChoice = OPTIONS[Math.floor(Math.random())*(OPTIONS.length-1)]; // Math.random returns a random number between 0 (inclusive) and 1 (exclusive)...importantly its always lower than 1, Math.floor(Math.random) makes it return an integer * by whatever (n-1) where n is desired number; options.lentgh returns the length of options which is 3
    return computerChoice
}

//Function that gets the players choice for a game of rock paper scissors
// returns their choice to lowercase to have it match options array
function getPlayerChoice() {
    var playerSelection = prompt("What is your selection?")
    playerSelection = playerSelection.toLowerCase(); //change to lower case
    return playerSelection
}

// Function that plays a single round of RockPaperScissors.
// The function takes two params: playerSelection and computerSelection
// returns a sting that declares the winner of the round
function playRound(playerSelection,computerSelection) {
    var computerSelection = getComputerChoice();
    var playerSelection = getPlayerChoice();

    var winner = getWinner(playerSelection, computerSelection);

    if (winner === 'player') {
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (winner === 'computer') {
        return `You Lose! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else {
        return 'You tied! Great minds think alike!';
    }
}

// Function that decides who wins a game or rock paper scissors
// Rock beats scissors; scissors beats paper; paper beats rock
// Returns a string with the winner either 'player', 'computer or 'none'
function getWinner(playerSelection, computerSelection) {
    let winner;

    switch(true) {

        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
            winner = 'player';
            break;
    
        case (computerSelection == 'rock' && playerSelection == 'scissors'):
        case (computerSelection == 'scissors' && playerSelection == 'paper'):
        case (computerSelection == 'paper' && playerSelection == 'rock'):
            winner = 'computer';
            break;

        default:
            winner = 'none';
    }
    return winner
}

// Function which calls playRound() 5 times, keeps score and declares a winner at the end of 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i < 5; i++) {
        playRound()
        if (winner === 'player') {
            playerScore += 1;
        } else if (winner === 'computer') {
            computerScore +=1;
        } else {
            
        }

    }
}
