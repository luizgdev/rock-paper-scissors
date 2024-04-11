/**
 * This function chooses randomly a string containing either 'Rock', 'Paper' or 'Scissors'.
 * @returns {string} A random string containing either 'Rock', 'Paper' or 'Scissors'.
 */
function getComputerChoice() {
    const str = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * str.length);
    return str[rand];
}

/**
 * This function plays a round of Rock, Paper, Scissors.
 * @param {any} playerSelection The player selection.
 * @param {any} computerSelection The computer selection.
 * @returns The result of a Rock, Paper, Scissors round.
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

/**
 * This function plays the game.
 */
function playGame() {
    let playerCount = 0;
    let computerCount = 0;

    console.log('Welcome to the Rock, Paper, Scissors game!');

    for (let index = 0; index < 5; index++) {
        console.log(`Round ${index + 1}`);

        let playerSelection = prompt("Choose your move: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        result.startsWith('You Win!') ? playerCount++ : computerCount++;
    }

    playerCount > computerCount ? console.log('Congratulations! You win the game!') : console.log('Game Over!');
}

playGame();