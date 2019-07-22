import comparedNumbers from './compare-numbers.js';

const button = document.getElementById('button');
const userGuess = document.getElementById('number-guess-input');
const quizResult = document.getElementById('quiz-result');

const correctNumber = Math.floor(Math.random() * 20); //Attribute MDN web docs
let numberRemaining = 4;

button.addEventListener('click', () => {
    
    numberRemaining -= 1;
    
    const userGuessValue = userGuess.value;
    
    const userResponseCorrect = ('You have guessed the correct number!!');
    const userResponseLow = ('Your guess was too low! Number of tries remaining: ' + numberRemaining);
    const userResponseHigh = ('Your guess was too high! Number of tries remaining: ' + numberRemaining);
    const userResponseLose = ('Woops, you have run out of guesses!! Thanks for playing and feel free to try again using the "Click To Reset Quiz" button below!');
    
    if(comparedNumbers(userGuessValue, correctNumber) === undefined) {
        button.disabled = true;
        return quizResult.textContent = userResponseCorrect;
    }
   
    if(numberRemaining === 0) {
        button.disabled = true;
        return quizResult.textContent = userResponseLose;
    }

    if(comparedNumbers(userGuessValue, correctNumber) === -1) {
        return quizResult.textContent = userResponseLow;

    }
    if(comparedNumbers(userGuessValue, correctNumber) === 1) {
        return quizResult.textContent = userResponseHigh;

    }
});