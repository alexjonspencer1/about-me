import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes is correct answer', function(assert) {

    const response = 'yes';
    const expected = true;

    const result = isYes(response);

    assert.equal(result, expected);

});

test('YES is correct answer', function(assert) {

    const response = 'YES';
    const expected = true;

    const result = isYes(response);

    assert.equal(result, expected);
});

test('no is not the correct answer', function(assert) {

    const response = 'no';
    const expected = false;

    const result = isYes(response);

    assert.equal(result, expected);
});

test('Y is a correct answer', function(assert) {

    const response = 'Y';
    const expected = true;

    const result = isYes(response);

    assert.equal(result, expected);
});

test('n is an incorrect answer', function(assert) {

    const response = 'N';
    const expected = false;

    const result = isYes(response);

    assert.equal(result, expected);
});

test('no input is an incorrect answer', function(assert) {
 
    const response = '';
    const expected = false;

    const result = isYes(response);

    assert.equal(result, expected);
});
