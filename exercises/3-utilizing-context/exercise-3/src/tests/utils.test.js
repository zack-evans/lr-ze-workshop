const { validateInput, formatData } = require('../js/utils');

describe('Utility Functions', () => {
    describe('validateInput', () => {
        it('should return true for valid input', () => {
            expect(validateInput('valid input')).toBe(true);
        });

        it('should return false for invalid input', () => {
            expect(validateInput('')).toBe(false);
            expect(validateInput(null)).toBe(false);
        });
    });

    describe('formatData', () => {
        it('should format data correctly', () => {
            const input = { name: 'John', age: 30 };
            const expectedOutput = 'Name: John, Age: 30';
            expect(formatData(input)).toBe(expectedOutput);
        });

        it('should return an empty string for invalid data', () => {
            expect(formatData(null)).toBe('');
            expect(formatData({})).toBe('');
        });
    });
});