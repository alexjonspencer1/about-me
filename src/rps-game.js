import { getThrow } from './get-play.js';

// Define referenced DOMs 

const button = document.getElementById('button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const message = document.getElementById('rps-result');
const messageUserChoice = document.getElementById('user-choice');
const messageCompChoice = document.getElementById('computer-choice');
const userBetMessage = document.getElementById('money-bet');
const userMoneyLeft = document.getElementById('money-left');

// Event handlers

let wins = 0;
let losses = 0;
let ties = 0;
let moneyLeft = 500;

button.addEventListener('click', () => {

    //determine the users bet 

    const userBet = userBetMessage.value;
    
    //determine which item the user picked

    const userChoice = document.querySelector('input:checked');
    let userThrow = userChoice.value;
    messageUserChoice.textContent = userThrow;

    //determine which number generated which item

    const computerChoice = getThrow();
    messageCompChoice.textContent = computerChoice;

    // compare the item the user picked with the item generated
    
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

    // tally the wins and losses

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