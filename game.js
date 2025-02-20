// get the computer's choice
function getComputerChoice() {
    const strChoices = ["rock", "paper", "scissors"];
    const numNumber = Math.floor(Math.random() * 3);
    return strChoices[numNumber];
};

// get human's choice
function getHumanChoice() {
    const strHumanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return strHumanChoice;
};

// play round
function playRound(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors!");
        return true;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose. Paper beats rock...");
        return false;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
        return true;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose. Scissors beat paper...");
        return false;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat paper!");
        return true;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose. Rock beats scissors...");
        return false;
    }  else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Error! You did not enter a valid option! Please enter 'rock', 'paper' or 'scissors'.")
    }
};

// play game
function playGame() {
    // keep track of the player's score
    let numHumanScore = 0;
    let numComputerScore = 0;

    // call the play round function 5 times
    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const playerWon = playRound(humanSelection, computerSelection);

        if (playerWon == true) {
            numHumanScore++;
        } else if (playerWon == false) {
            numComputerScore++;
        };

        console.log("Player score " + numHumanScore);
        console.log("Computer score " + numComputerScore);
    };

    // Declares the winner
    if (numHumanScore > numComputerScore) {
        console.log("You win!");
    } else if (numComputerScore > numHumanScore) {
        console.log("You lose...");
    } else {
        console.log("It's a tie...");
    };
};
    
playGame();
