import { getThrow } from './get-play.js';

// Define Referenced DOMs 

const button = document.getElementById('button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const message = document.getElementById('rps-result');
const messageUserChoice = document.getElementById('user-choice');
const messageCompChoice = document.getElementById('computer-choice');
const userBetMessage = document.getElementById('money-bet');
const userMoneyLeft = document.getElementById('money-left');
const computerImage = document.getElementById('computer-result-image');
const userImage = document.getElementById('user-result-image')

// Tracking states

let wins = 0;
let losses = 0;
let ties = 0;
let moneyLeft = 500;

// Event handlers

button.addEventListener('click', () => {

    // Determine User Bet

    const userBet = userBetMessage.value;
    
    // Determine User RPS Choice

    const userChoice = document.querySelector('input:checked');
    let userThrow = userChoice.value;
    messageUserChoice.textContent = userThrow;

    // Show User Result

    userImage.classList.remove('invisible');
    const srcUser = 'assets/' + userThrow + '.png';
    userImage.src = srcUser;
    
    // Determine Computer RPS Choice from RNG getThrow
    
    const computerChoice = getThrow();
    messageCompChoice.textContent = computerChoice;

    // Show Computer Result

    computerImage.classList.remove('invisible');
    const srcComputer = 'assets/' + computerChoice + '.png';
    computerImage.src = srcComputer;

    // Generate Results
    
    if(userThrow === computerChoice) {
        message.textContent = 'tie';
    } else if(userThrow === 'rock') {
        if(computerChoice === 'paper') {
            message.textContent = 'lose';
        } else {
            message.textContent = 'win'; }
    } else if(userThrow === 'paper') {
        if(computerChoice === 'rock') {
            message.textContent = 'win';
        } else {
            message.textContent = 'lose'; }
    } else if(userThrow === 'scissors') {
        if(computerChoice === 'rock') {
            message.textContent = 'lose';
        } else {
            message.textContent = 'win'; }
    }

    // Tally Record and Bet Function (+/-)

    if(message.textContent === 'win') {
        winCount.textContent = wins += 1; 
        userMoneyLeft.textContent = moneyLeft -= -userBet;
    }
    if(message.textContent === 'lose') {
        lossCount.textContent = losses += 1;
        userMoneyLeft.textContent = moneyLeft -= userBet;
    }
    
    if(message.textContent === 'tie') { 
        tieCount.textContent = ties += 1;
        userMoneyLeft.textContent = moneyLeft;
    }

});