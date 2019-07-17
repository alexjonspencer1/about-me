import comparedNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

//Test 1
test('if they guess the right number', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 15;
    const correctNumber = 15;
    const expected = 0; 

    //Act 
    // Call the function you're testing and set the result to a const

    const result = comparedNumbers(response, correctNumber);

    //Assert

    assert.equal(result, expected);

});

//Test 2
test('if they guess lower than right number', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 8;
    const correctNumber = 10;
    const expected = -1; 

    //Act 
    // Call the function you're testing and set the result to a const

    const result = comparedNumbers(response, correctNumber);

    //Assert

    assert.equal(result, expected);

});

//Test 2
test('if they guess higher than right number', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const response = 18;
    const correctNumber = 15;
    const expected = 1; 

    //Act 
    // Call the function you're testing and set the result to a const

    const result = comparedNumbers(response, correctNumber);

    //Assert

    assert.equal(result, expected);

});

