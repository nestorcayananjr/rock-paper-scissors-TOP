const rockPaperScissors = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return rockPaperScissors[Math.floor(Math.random() * 3)]
};

function playRound(playerSelection, computerSelection){
    if (!rockPaperScissors.includes(playerSelection)) return 'Invalid Choice!'
    if (playerSelection === computerSelection) return `It's a tie! You both chose ${playerSelection}.`
    if (playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock'){
        return `You lose...${computerSelection} beats ${playerSelection}!`
    } else return `You win...${playerSelection} beats ${computerSelection}!`
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let userChoice = window.prompt(`Round ${i+1}: Rock, Paper, or Scissors?`).toLowerCase();
        let result = playRound(userChoice, getComputerChoice());
        if (result.includes('lose')){
            computerScore++;
        } else if (result.includes('win')){ 
            playerScore++;
        }
        window.alert(result + ` You have ${playerScore} points and the computer has ${computerScore} points.`);
    }

    if (playerScore > computerScore){
      window.alert(`You won ${playerScore} to ${computerScore}!`)
    } else if (playerScore < computerScore){
        window.alert(`You lose ${computerScore} to ${playerScore}.`)
    } else window.alert(`It's a tie!  `)
}

game();

