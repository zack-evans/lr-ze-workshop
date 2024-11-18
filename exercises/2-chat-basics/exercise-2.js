/*
TO-DO:
Each exercise represets a different aspect of the Copilot Chat experience.
For each exercise, highlight the code snippet and then open Copilot Chat to interact with the code.
*/



// Exercise 1: Basic Chat Interactions
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

// Try these Copilot interactions in Copilot Chat:
// explain this function
// "suggest improvements"
// OR
// "how can I handle empty arrays?""

// Exercise 3: Documentation and Comments
function processUserData(user) {
    const { name, email, preferences } = user;
    // Implementation placeholder
    return { name, email, preferences };
}

// Documentation practice:
// Add JSDoc comments
// Generate README section
// Create usage examples

// Exercise 4: Testing and Debugging
function calculateDiscount(price, percentage) {
    return price * (1 - percentage / 100);
}

// Testing practice:
// Write unit tests using Jest
// What edge cases should I test?
// Generate mock data

// Exercise 5: Code Review
function fetchUserData(id) {
    return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// Review practice:
// Review this code for security issues
// How can I improve error handling?
// Suggest performance optimizations

// Sample test data
const sampleItems = [
    { price: 10 },
    { price: 20 },
    { price: 30 }
];

const sampleUser = {
    name: "John Doe",
    email: "john@example.com",
    preferences: { theme: "dark" }
};

// Run examples
console.log(calculateTotal(sampleItems));
console.log(processUserData(sampleUser));
console.log(calculateDiscount(100, 20));
fetchUserData(1);

//Pruning chat history