import comparedNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('if they guess the right number', (assert) => {

    const response = 15;
    const correctNumber = 15;
    const expected = 0; 

    const result = comparedNumbers(response, correctNumber);

    assert.equal(result, expected);

});

test('if they guess lower than right number', (assert) => {

    const response = 8;
    const correctNumber = 10;
    const expected = -1; 

    const result = comparedNumbers(response, correctNumber);

    assert.equal(result, expected);

});

test('if they guess higher than right number', (assert) => {

    const response = 18;
    const correctNumber = 15;
    const expected = 1; 

    const result = comparedNumbers(response, correctNumber);

    assert.equal(result, expected);

});
