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
    if (humanChoice == "rock" && computerChoice == "scissors") {
        domMessage.textContent = "You win! Rock beats scissors!"
        return true;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        domMessage.textContent = "You lose. Paper beats rock..."
        return false;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        domMessage.textContent = "You win! Paper beats rock!"
        return true;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        domMessage.textContent = "You lose. Scissors beat paper..."
        return false;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        domMessage.textContent = "You win! Scissors beat paper!"
        return true;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        domMessage.textContent = "You lose. Rock beats scissors..."
        return false;
    }  else if (humanChoice == computerChoice) {
        domMessage.textContent = "It's a tie!"
    } else {
        domMessage.textContent = "Error! You did not enter a valid option! Please enter 'rock', 'paper' or 'scissors'."
    }
};

// DOM elements
const domRock = document.getElementById("rock");
const domPaper = document.getElementById("paper");
const domScissors = document.getElementById("scissors");
const domMessage = document.getElementById("message");
const domPlayerScore = document.getElementById("playerScore");
const domComputerScore = document.getElementById("computerScore")

// Event listeners
domRock.addEventListener("click", () => {
    playGame("rock")
})

domPaper.addEventListener("click", () => {
    playGame("paper")
})

domScissors.addEventListener("click", () => {
    playGame("scissors")
})

// play game
function playGame(userChoice) {
    const boolPlayerWon = playRound(userChoice, getComputerChoice())

    const intPlayerScore = Number(domPlayerScore.textContent) + 1
    const intComputerScore = Number(domComputerScore.textContent) + 1 

    if (boolPlayerWon === true) {
        domPlayerScore.textContent = intPlayerScore
    } else if (boolPlayerWon === false) {
        domComputerScore.textContent = intComputerScore
    }
}

// play game
function playGameOld() {
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
    
// playGame();
