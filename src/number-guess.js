//What am I importing from other js files?

import comparedNumbers from './compare-numbers.js';

// What do I need from the DOM (elements)

const button = document.getElementById('button');
const userGuess = document.getElementById('number-guess-input');
const quizResult = document.getElementById('quiz-result');

// What state do I need to track? 

// Function correct number

let correctNumber = 15;
let numberRemaining = 4;
let increment = 1;
let numberDecrease = numberRemaining -= increment;

// What events do I need to listen to? 

button.addEventListener('click', () => {
    
    const userGuessValue = userGuess.value;
    
    let userResponseCorrect = ('You have guessed the correct number!!');
    let userResponseLow = ('Your guess was too low! You have ' + numberRemaining + ' guesses remaining!');
    let userResponseHigh = ('Your guess was too high! You have ' + numberRemaining + ' guesses remaining!');
    
    // User guess is too low
    
    if(comparedNumbers(userGuessValue, correctNumber) === -1) {
        numberDecrease;
        return quizResult.textContent = userResponseLow;
    }
    
    // User guess is too high
    if(comparedNumbers(userGuessValue, correctNumber) === 1) {
        numberDecrease;
        return quizResult.textContent = userResponseHigh;
    }
    
    // User guess is correct
    if(comparedNumbers(userGuessValue, correctNumber) === undefined) {
        return quizResult.textContent = userResponseCorrect;
    }
});