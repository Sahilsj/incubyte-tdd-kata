const {add} = require('../src/stringCalculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number for  single value', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of two comma -separeted numbers', () => {
    expect(add("1,5")).toBe(6);
});

test('handles new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

