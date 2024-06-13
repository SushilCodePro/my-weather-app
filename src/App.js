import React, { useEffect, useState, useCallback } from 'react';
import WeatherCard from './components/WeatherCard';
import LocationInput from './components/LocationInput';
import { getWeather } from './services/weatherService';
import useLocation from './hooks/useLocation';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const { currentLocation } = useLocation();

    const fetchWeather = useCallback(async (location) => {
        const weatherData = await getWeather(location);
        setWeather(weatherData);
    }, []);

    useEffect(() => {
        if (currentLocation) {
            fetchWeather(currentLocation);
        }
    }, [currentLocation, fetchWeather]);

    const handleLocationChange = (newLocation) => {
        fetchWeather(newLocation);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Weather App</h1>
            <LocationInput onLocationChange={handleLocationChange} />
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;
