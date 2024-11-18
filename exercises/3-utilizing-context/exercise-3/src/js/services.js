// services.js

/**
 * Fetches data from a given API endpoint.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 */
export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

/**
 * Processes the fetched data and returns a formatted result.
 * @param {Object} data - The data to process.
 * @returns {Object} - The processed data.
 */
export const processData = (data) => {
    // Example processing: return only relevant fields
    return {
        id: data.id,
        name: data.name,
        // Add more fields as necessary
    };
};