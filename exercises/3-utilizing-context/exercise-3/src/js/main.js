// main.js

// Import utility functions and services
import { validateInput, formatData } from './utils.js';
import { fetchData } from './services.js';

// Initialize the application
function init() {
    setupEventListeners();
}

// Set up event listeners for user interactions
function setupEventListeners() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', handleSubmit);
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const inputField = document.getElementById('input-field');
    const userInput = inputField.value;

    if (validateInput(userInput)) {
        fetchData(userInput)
            .then(data => {
                const formattedData = formatData(data);
                displayData(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        console.error('Invalid input');
    }
}

// Display the fetched data
function displayData(data) {
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = JSON.stringify(data, null, 2);
}

// Start the application
init();