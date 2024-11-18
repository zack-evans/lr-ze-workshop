# 🤖 GitHub Copilot Chat Exercises 

## Overview

This series of exercises will focus on the basics of GitHub Copilot Chat and understanding:
- Chat's communication patterns
- Documenting code
- 

## Exercises

### 1. 💬 Getting Started with Copilot Chat

**Task:** Getting started with Copilot Chat: using effective commmunication patterns

**Task:**
1. Open 
2. Use Copilot commands to:
   - Ask for code explanations
   - Request improvements
   - Get function-specific help

**Hints:**
- Use /help for command list
- Be specific in questions
- Build complexity gradually

<details>
<summary>Solution</summary>

```javascript
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

// Sample queries:
// /explain - What does this function do?
// /suggest - How can I improve this?
// /fix - Handle empty arrays
```
</details>

### 2.📝 Documentation and Comments 

**Topic:** Documentation Generation

**Objective:** Master code documentation with Copilot Chat

**Task:**
1. Create data transformation functions
2. Generate:
   - JSDoc comments
   - README sections
   - Usage documentation

**Hints:**
- Target specific audiences
- Include practical examples
- Use /doc command
- Focus on clarity

<details>
<summary>Solution</summary>

```javascript
/**
 * Processes user data
 * @param {Object} user - User object
 * @returns {Object} Processed user data
 */
function processUserData(user) {
    const { name, email, preferences } = user;
    // Implementation
}
```
</details>

### 3. 🧪 Testing and Debugging 

**Topic:** Test Generation and Debugging

**Objective:** Learn test creation and debugging workflows

**Context:**
Ensuring code quality through testing.

**Task:**
1. Review the exercise's code snippet
2. Use Chat to exploring generating the following types of tests:
   - Unit tests
   - Integration tests
   - Edge case tests
   - Negative tests

**Hints:**
- Specify test framework
- Be specific regarding the kinds of tests you want and how they should be executed
  - i.e. unit tests executed async

<details>
<summary>Solution</summary>

```javascript
// Main function
function calculateDiscount(price, percentage) {
    return price * (1 - percentage / 100);
}

// Unit Tests
describe('calculateDiscount', () => {
    // Basic unit tests
    test('calculates 10% discount correctly', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });
    
    test('calculates 0% discount correctly', () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    });
    
    test('calculates 100% discount correctly', () => {
        expect(calculateDiscount(100, 100)).toBe(0);
    });

    // Edge cases
    test('handles negative prices', () => {
        expect(calculateDiscount(-100, 10)).toBe(-90);
    });

    test('handles negative percentages', () => {
        expect(calculateDiscount(100, -10)).toBe(110);
    });

    test('handles zero price', () => {
        expect(calculateDiscount(0, 20)).toBe(0);
    });

    test('handles decimal values', () => {
        expect(calculateDiscount(99.99, 10)).toBeCloseTo(89.991);
    });
});

// Integration test example
describe('discount integration', () => {
    test('works with shopping cart calculation', () => {
        const cart = {
            items: [
                { price: 100, discount: 10 },
                { price: 50, discount: 20 }
            ],
            calculateTotal() {
                return this.items.reduce((total, item) => 
                    total + calculateDiscount(item.price, item.discount), 0);
            }
        };
        expect(cart.calculateTotal()).toBe(130); // 90 + 40
    });
});

// Test Generation:
// /test - Generate Jest tests
// /edge - List edge cases
```
</details>

// Coverage requirements
/**
 * @jest-environment jsdom
 * @coverage-minimum 90
 */

### 4. 🔍 Code Review and Best Practices 

**Topic:** Code Review Assistance

**Objective:** Improve code quality via reviews

**Task:**
1. Review existing code
2. Check for:
   - Potential issues
   - Performance gaps
   - Security risks

**Hints:**
- Use /review command
- Focus on specific aspects
- Request modern patterns

<details>
<summary>Solution</summary>

```javascript
function fetchUserData(id) {
    return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// Review commands:
// /review - Full code review
// /security - Check security
// /performance - Optimization tips
```
</details>