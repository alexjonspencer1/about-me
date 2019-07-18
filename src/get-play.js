export default function getThrow() {
    const randomNumber = Math.floor();
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