import isYes from './is-yes.js';

// Reference needed DOM elements
const clickButton = document.getElementById('quiz-start');
const quizResult = document.getElementById('quiz-result');

// Event Handlers
clickButton.onclick = function() {
    const firstNameParticipant = prompt ('Please enter your first name!');
    const lastNameParticipant = prompt ('Now your last name please!');
    
    const requestContinue = confirm('It\'s not too late to back out ' + firstNameParticipant + '!! Are you sure you want to continue?');
    
    if(requestContinue === false) {
        return;
    } 
    alert ('Excellent news, let\'s play the game!');

    const questionOne = prompt ('My family dog is a 65 pound goldendoodle named Timber (Y/N)');

    const questionTwo = prompt ('My wife and I live in Vancouver, WA (Y/N)');

    const questionThree = prompt ('My favorite city in the world is Edinburgh, Scotland (Y/N)');

    alert ('You have completed the quiz, YAY!! Your results will be posted at the bottom of the webpage.');

    const responseOne = isYes(questionOne);
    const responseTwo = isYes(questionTwo);
    const responseThree = isYes(questionThree);

    let numberCorrect = 0;

    if(responseOne) {
        numberCorrect += 1; 
    }
    
    if(responseTwo === false) {
        numberCorrect += 1;
    }

    if(responseThree === true) {
        numberCorrect += 1;
    }

    const numberPercent = Math.floor(numberCorrect / 3) * 100;

    let userResponse = ('Your name is' + ' ' + firstNameParticipant + ' ' + lastNameParticipant + ' and let\'s see how you did! It looks like you got ' + numberCorrect + '/3, or ' + numberPercent + '% correct.');

    quizResult.textContent = userResponse;
    
};