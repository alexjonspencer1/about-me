import { getThrow } from './get-play.js';

const playButton = document.getElementById('button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const messageResult = document.getElementById('rps-result');
const messageUserChoice = document.getElementById('user-choice');
const messageCompChoice = document.getElementById('computer-choice');
const userBetChoice = document.getElementById('money-bet');
const userMoneyLeft = document.getElementById('money-left');
const computerImage = document.getElementById('computer-result-image');
const userImage = document.getElementById('user-result-image');
const gameSection = document.getElementById('record-section');
const moneyRemaining = document.getElementById('money-remaining');
const gameOverMessage = document.getElementById('game-over');

let wins = 0;
let losses = 0;
let ties = 0;
let moneyLeft = 500;

playButton.addEventListener('click', () => {
    gameSection.classList.remove('invisible');
    let userBet = determineUserBet();
    userBet = checkBet(userBet);
    let userPlay = determineUserPlay();
    displayUserPlay(userPlay);
    const computerPlay = determineComputerPlay();
    displayComputerPlay(computerPlay);
    generateResults(userPlay, computerPlay);
    recordCountsAndBets(userBet);
    checkGameOverAndDisplay();
});

function determineUserBet() {
    return userBetChoice.value;
}

function checkBet(userBet) {
    while(userBet > moneyLeft) {
        userBet = prompt('Invalid bet please place a lower bet:');
    }
    userBetChoice.value = userBet;
    return userBet;
}

function determineUserPlay() {
    const userChoice = document.querySelector('input:checked');
    let userPlay = userChoice.value;
    messageUserChoice.textContent = userPlay;
    return userPlay;
}

function displayUserPlay(userPlay) {
    userImage.classList.remove('invisible');
    const srcUser = 'assets/' + userPlay + '.png';
    userImage.src = srcUser;
}

function determineComputerPlay() {
    const computerPlay = getThrow();
    messageCompChoice.textContent = computerPlay;
    return computerPlay;
}

function displayComputerPlay(computerPlay) {
    computerImage.classList.remove('invisible');
    const srcComputer = 'assets/' + computerPlay + '.png';
    computerImage.src = srcComputer;
}

function generateResults(userPlay, computerPlay) {
    if(userPlay === computerPlay) {
        messageResult.textContent = 'tie';
    }
    else if(userPlay === 'rock') {
        if(computerPlay === 'paper') {
            messageResult.textContent = 'lose';
        }
        else {
            messageResult.textContent = 'win';
        }
    }
    else if(userPlay === 'paper') {
        if(computerPlay === 'scissors') {
            messageResult.textContent = 'lose';
        }
        else {
            messageResult.textContent = 'win';
        }
    }
    else if(userPlay === 'scissors') {
        if(computerPlay === 'rock') {
            messageResult.textContent = 'lose';
        }
        else {
            messageResult.textContent = 'win';
        }
    }
}

function recordCountsAndBets(userBet) {
    if(messageResult.textContent === 'win') {
        winCount.textContent = wins += 1;
        userMoneyLeft.textContent = moneyLeft -= -userBet;
    }
    if(messageResult.textContent === 'lose') {
        lossCount.textContent = losses += 1;
        userMoneyLeft.textContent = moneyLeft -= userBet;
    }
    if(messageResult.textContent === 'tie') {
        tieCount.textContent = ties += 1;
        userMoneyLeft.textContent = moneyLeft;
    }
}

function checkGameOverAndDisplay() {
    if(moneyLeft <= 0) {
        playButton.disabled = true;
        gameOverMessage.textContent = ('You have lost, please refresh to play again!');
        moneyRemaining.classList.add('invisible');
    }
}
