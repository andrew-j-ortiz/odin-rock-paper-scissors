// get the computer's choice
function getComputerChoice() {
    const strChoices = ["rock", "paper", "scissors"];
    const intNumber = Math.floor(Math.random() * 3);
    return strChoices[intNumber];
};

console.log(getComputerChoice());