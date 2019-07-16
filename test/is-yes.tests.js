import isYes from '../src/is-yes.js';

const test = QUnit.test;

//Test 1
test('yes is correct answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const response = 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = isYes(response);

    //Assert

    assert.equal(result, expected);

});

//Test 2
test('YES is correct answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const response = 'YES';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = isYes(response);

    //Assert

    assert.equal(result, expected);
});

//Test 3
test('no is not the correct answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
   
    const response = 'no';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
   
    const result = isYes(response);

    //Assert
    
    assert.equal(result, expected);
});

//Test 4
test('Y is a correct answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
   
    const response = 'Y';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
   
    const result = isYes(response);

    //Assert
    
    assert.equal(result, expected);
});

//Test 5
test('n is an incorrect answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
   
    const response = 'N';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
   
    const result = isYes(response);

    //Assert
    
    assert.equal(result, expected);
});

//Test 6
test('no input is an incorrect answer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
   
    const response = '';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
   
    const result = isYes(response);

    //Assert
    
    assert.equal(result, expected);
});
