// keep track of the player's score
let numHumanScore = 0;
let numComputerScore = 0;

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
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors!");
        numHumanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose. Paper beats rock...");
        numHumanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
        numHumanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose. Scissors beat paper...");
        numComputerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose. Rock beats scissors...");
        numComputerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat paper!");
        numHumanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Error! You did not enter a valid option! Please enter 'rock', 'paper' or 'scissors'.")
    }
    console.log(numHumanScore);
    console.log(numComputerScore);
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);