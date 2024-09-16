let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

function playGame() {
    const userChoice = document.getElementById('userChoice').value.toLowerCase();
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    roundsPlayed++;
    
    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    // Display results
    document.getElementById('result').innerHTML = `You chose: ${userChoice}, Computer chose: ${computerChoice}. Result: ${result}`;
    document.getElementById('score').innerHTML = `Score - You: ${userScore}, Computer: ${computerScore}`;
  
    // Check if game is over
    if (roundsPlayed >= maxRounds) {
        if (userScore > computerScore) {
            document.getElementById('result').innerHTML += `<br><b>You won the game!</b>`;
        } else {
            document.getElementById('result').innerHTML += `<br><b>Computer won the game!</b>`;
        }
        
        // Reset for a new game
        userScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    }
}

// Randomly generate the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the winner based on both choices
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}
