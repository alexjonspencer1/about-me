import isYes from '../src/is-yes.js';

const test = QUnit.test;

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
