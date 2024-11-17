require('dotenv').config();

const WeatherForecastService = require('./weatherForecast');
const weatherService = new WeatherForecastService();

async function example() {
    try {
        // Get current weather
        const current = await weatherService.getCurrentWeather('London');
        console.log('Current weather:', current);

        // Get 7-day forecast
        const forecast = await weatherService.getSevenDayForecast('London');
        console.log('7-day forecast:', forecast);

        // Get weather by coordinates
        const weatherByLocation = await weatherService.getWeatherByCoordinates(51.5074, -0.1278);
        console.log('Weather by coordinates:', weatherByLocation);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

example();