function comparedNumbers(guess, correctNumber) {
    if(guess === correctNumber) {
        return true;
    } else if(guess < correctNumber) {
        return false;
    } else if(guess > correctNumber) {
        return false;
    }
}
export default comparedNumbers;