// Utility functions for the JavaScript practice application

/**
 * Validates if the input is a non-empty string.
 * @param {string} input - The input string to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
export function isValidString(input) {
    return typeof input === 'string' && input.trim().length > 0;
}

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date object to format.
 * @returns {string} - Returns the formatted date string.
 */
export function formatDate(date) {
    if (!(date instanceof Date)) {
        throw new Error('Invalid date object');
    }
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - Returns a random integer between min and max.
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}