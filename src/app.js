import isYes from './is-yes.js';

// Reference needed DOM elements
const clickButton = document.getElementById('quiz-start');
const quizResult = document.getElementById('quiz-result');

// Event Handlers
clickButton.onclick = function execute() {
    const firstNameParticipant = prompt ('Please enter your first name!');
    if(firstNameParticipant === null) {
        return;
    }
    const lastNameParticipant = prompt ('Now your last name please!');
    if(lastNameParticipant === null) {
        return;
    }

    const requestContinue = confirm('It\'s not too late to back out ' + firstNameParticipant + '!! Are you sure you want to continue?');
    if(requestContinue === false) {
        return;
    } 

    alert ('Excellent news, ' + firstNameParticipant + '. Let\'s play the game!');

    //Question 1
    const questionOne = prompt ('My family dog is a 65 pound goldendoodle named Timber (Y/N)');
    if(questionOne === '') {
        return alert('You have to put in something!! Responses are important, so restart the quiz please!');
    } 

    //Question 2
    const questionTwo = prompt ('My wife and I live in Vancouver, WA (Y/N)');
    if(questionTwo === '') {
        return alert('You have to put in something!! Responses are important, so restart the quiz please!');
    }

    //Question 3
    const questionThree = prompt ('My favorite city in the world is Edinburgh, Scotland (Y/N)');
    if(questionThree === '') {
        return alert('You have to put in something!! Responses are important, so restart the quiz please!');
    }

    alert ('You have completed the quiz, YAY!! Your results will be posted at the bottom of the webpage.');

    //Checking sumbissions agaist the is-yes function
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

    if(responseThree) {
        numberCorrect += 1;
    }

    const numberPercent = Math.floor(numberCorrect / 3) * 100;

    //Result text to user
    let userResponse = ('Hey' + ' ' + firstNameParticipant + ' ' + lastNameParticipant + '. Thanks for taking my quiz, let\'s see how you did! It looks like you got ' + numberCorrect + '/3, or ' + numberPercent + '% correct.');

    quizResult.textContent = userResponse;
    
};