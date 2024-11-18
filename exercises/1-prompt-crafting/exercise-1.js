// Exercise 1: Function Implementation
// TODO: Try different prompts for implementing phone number validation
function validatePhoneNumber(phoneNumber) {
    // Implementation will vary based on prompt given
}

// Exercise 2: Documentation Generation
// TODO: Practice generating documentation with different levels of detail
function processUserData(userData) {
    // Intentionally undocumented function for documentation practice
    const { name, age, email } = userData;
    if (!name || !age || !email) throw new Error('Missing required fields');
    return {
        id: Date.now(),
        name: name.trim(),
        age: parseInt(age),
        email: email.toLowerCase()
    };
}

// Exercise 3: Code Refactoring
// TODO: Use different prompts to improve this intentionally poor implementation
function findUsersByStatus(users, status) {
    var tmp = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].status == status) {
            tmp.push(users[i]);
        }
    }
    return tmp;
}

// Exercise 4: Test Case Generation
// TODO: Practice writing test cases with increasing specificity
function calculateDiscount(price, memberType) {
    if (memberType === 'gold') return price * 0.8;
    if (memberType === 'silver') return price * 0.9;
    return price;
}

// Exercise 5: Context-Aware Prompting
// TODO: Implement data validation with increasing context requirements
function validateUserData(data) {
    // Implementation will vary based on context provided in prompt
}

// Exercise 6: Debugging Practice
// TODO: Intentionally buggy code for debugging practice
function calculateAverageScore(scores) {
    let total = 0;
    for (let score in scores) {
        total += score; // Bug: using 'score' instead of scores[score]
    }
    return total / scores.length;
}