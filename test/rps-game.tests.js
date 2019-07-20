import { getThrowFromNumber } from '../src/get-play.js';

const test = QUnit.test;

test('tests if the computer-generated result is rock', (assert) => {
    const response = 0;
    const expected = 'rock';
    const result = getThrowFromNumber(response);
    assert.equal(result, expected);
});

test('tests if the computer-generated result is paper', (assert) => {
    const response = 1;
    const expected = 'paper';
    const result = getThrowFromNumber(response);
    assert.equal(result, expected);
});

test('tests if the computer-generated result is scissors', (assert) => {
    const response = 2;
    const expected = 'scissors';
    const result = getThrowFromNumber(response);
    assert.equal(result, expected);
});