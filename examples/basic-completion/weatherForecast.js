// weatherForecast.js
const axios = require('axios');

class WeatherForecastService {
    constructor() {
        this.apiKey = process.env.OPENWEATHER_API_KEY;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentWeather(city) {
        try {
            const response = await axios.get(`${this.baseUrl}/weather`, {
                params: {
                    q: city,
                    appid: this.apiKey,
                    units: 'metric'
                }
            });
            return this.formatCurrentWeather(response.data);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getSevenDayForecast(city) {
        try {
            const response = await axios.get(`${this.baseUrl}/forecast/daily`, {
                params: {
                    q: city,
                    cnt: 7,
                    appid: this.apiKey,
                    units: 'metric'
                }
            });
            return this.formatForecast(response.data);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getWeatherByCoordinates(lat, lon) {
        try {
            const response = await axios.get(`${this.baseUrl}/weather`, {
                params: {
                    lat,
                    lon,
                    appid: this.apiKey,
                    units: 'metric'
                }
            });
            return this.formatCurrentWeather(response.data);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    formatCurrentWeather(data) {
        return {
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon
        };
    }

    formatForecast(data) {
        return data.list.map(day => ({
            date: new Date(day.dt * 1000),
            temperature: {
                min: day.temp.min,
                max: day.temp.max
            },
            humidity: day.humidity,
            description: day.weather[0].description,
            icon: day.weather[0].icon
        }));
    }

    handleError(error) {
        if (error.response) {
            return new Error(`Weather API Error: ${error.response.data.message}`);
        }
        return new Error('Failed to fetch weather data');
    }
}
//Write a function that calculates the sine of a number. 
//ensure input exists
//ensure input is a number

function sin(x) {
    if (x < 0.01) {
        return x;
    }
    return sin(x - 2 * Math.PI)
}

module.exports = WeatherForecastService;