//Rock papers scissors
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    }
    else {
        return 'wrong input'
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)
    switch (randomNumber) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'the game is tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        }
        else {
            return 'You won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'the computer won!'
        }
        else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        }
        else {
            return 'You won!';
        }
    }
}
function playGame() {
    let userChoice = getUserChoice('rock', 'paper', 'scissors');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  console.log(playGame())