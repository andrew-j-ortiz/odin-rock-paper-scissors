// get the computer's choice
function getComputerChoice() {
    const strChoices = ["rock", "paper", "scissors"];
    const intNumber = Math.floor(Math.random() * 3);
    return strChoices[intNumber];
};

// get human's choice
function getHumanChoice() {
    const strHumanChoice = prompt("Choose rock, paper, or scissors:");
    console.log(strHumanChoice)
    return strHumanChoice;
};

getHumanChoice();