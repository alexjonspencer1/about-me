export function getThrow() {
    const randomNumber = Math.floor(Math.random() * Math.floor(3));
    const numberResult = getThrowFromNumber(randomNumber);
    return numberResult;
}

export function getThrowFromNumber(response) {
    if(response === 0) {
        return 'rock';
    }
    if(response === 1) {
        return 'paper';
    }
    if(response === 2) {
        return 'scissors';
    }
}