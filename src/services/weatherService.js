const API_KEY = '45ba66a3f10555b82dc9037099e5bfd9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

export const getWeather = async (location) => {
    console.log('getWeatherr',typeof(location));
    try {
        let url;
        if (typeof location === 'string' && (!location.includes(','))) {
            console.log('string');
            url = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (typeof location === 'object' && location.lat && location.lon) {
            console.log('object');
            url = `${BASE_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
        } else if (typeof location === 'string' && location.includes(',')) {
            console.log('string and coma');
            const [lat, lon] = location.split(',');
            url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        } else {
            throw new Error('Invalid location format');
        }

        const response = await fetch(url);
        if (!response.ok) {
            const errorDetails = await response.json();
            console.error('Error response:', errorDetails);
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log(data);
        return {
            // location: {
            //     name: data.name,
            // },
            // current: {
            //     temperature: data.main.temp,
            //     weather_descriptions: [data.weather[0].description],
            // }
            location: {
                name: data.name,
            },
            current: {
                temperature: data.main.temp,
                weather_descriptions: [data.weather[0].description],
                wind_speed: data.wind.speed,
                feels_like: data.main.feels_like,
                pressure: data.main.pressure,
            },
        };
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
};
