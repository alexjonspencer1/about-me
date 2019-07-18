import { getThrowFromNumber } from '../src/get-play.js';

const test = QUnit.test;

//Test 1
test('tests if the result is rock and if user guessed rock', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 0;
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getThrowFromNumber(response);

    //Assert

    assert.equal(result, expected);

});

//Test 2
test('tests if the result is paper and if user guessed paper', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 1;
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getThrowFromNumber(response);

    //Assert

    assert.equal(result, expected);

});

//Test 3
test('tests if the result is scissors and if user guessed scissors', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 2;
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getThrowFromNumber(response);

    //Assert

    assert.equal(result, expected);

});