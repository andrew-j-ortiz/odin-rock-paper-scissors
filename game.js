// get the computer's choice
function getComputerChoice() {
    const strChoices = ["rock", "paper", "scissors"];
    const numNumber = Math.floor(Math.random() * 3);
    return strChoices[numNumber];
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
const domRound = document.getElementById("round")

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
    const intPlayerScore = Number(domPlayerScore.textContent) + 1
    const intComputerScore = Number(domComputerScore.textContent) + 1
    const intRound = Number(domRound.textContent) + 1

    if (Number(domRound.textContent) < 5) {
        const boolPlayerWon = playRound(userChoice, getComputerChoice())

        if (boolPlayerWon === true) {
            domPlayerScore.textContent = intPlayerScore
        } else if (boolPlayerWon === false) {
            domComputerScore.textContent = intComputerScore
        }
        domRound.textContent = intRound
    }

    if (Number(domRound.textContent) === 5) {
        if (Number(domPlayerScore.textContent) > Number(domComputerScore.textContent)) {
            domMessage.textContent = "Game over! You Win!"
        } else if (Number(domPlayerScore.textContent) < Number(domComputerScore.textContent)) {
            domMessage.textContent = "Game over! Computer wins!"
        } else {
            domMessage.textContent = "Game over! It's a tie..."
        }
        setTimeout(()=>{
            location.reload()
        }, 5000)
    }
}
