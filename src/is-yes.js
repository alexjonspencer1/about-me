function isYes(response) {
    const responseName = response.toLowerCase();
    if(responseName === 'yes') {
        return true;
    } else if(responseName === 'y') {
        return true;
    } else if(responseName === 'no') {
        return false;
    } else if(responseName === 'n') {
        return false;
    } else if(responseName === '') {
        return false;
    }
}

export default isYes;