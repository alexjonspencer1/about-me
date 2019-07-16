function isYes(response) {
    const responseName = response.toLowerCase();
    if(responseName === 'yes') {
        return true;
    } else {
        return false;
    }
}

export default isYes;