import isYes from './is-yes.js';

// Reference needed DOM elements
const clickButton = document.getElementById('quiz-start');
const buttonResult = document.getElementById('quiz-result');

// Event Handlers
clickButton.onclick = function () {
    prompt ('Please enter your name!');
    const requestContinue = confirm('It\'s not too late to back out!! Are you sure you want to continue?');
    if(requestContinue === true) {
        return true;
    } else {
        return false;
    }
}
