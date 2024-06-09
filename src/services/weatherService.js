const API_KEY = '45ba66a3f10555b82dc9037099e5bfd9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (location) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log(data);  // This is useful for debugging
        return {
            location: {
                name: data.name,
            },
            current: {
                temperature: data.main.temp,
                weather_descriptions: [data.weather[0].description],
            }
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Test the function
// getWeather('Delhi');
