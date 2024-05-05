const { default: TestRunner } = require('jest-runner');
const add = require('./tst');

test('adds two numbers', () => {
    expect(add(4, 3)).toBe(7);
});
