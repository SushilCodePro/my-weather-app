import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import LocationInput from './components/LocationInput';
import { getWeather } from './services/weatherService';
import useLocation from './hooks/useLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Optional for custom styles

const App = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState('');
    const { currentLocation, getCurrentLocation } = useLocation();

    useEffect(() => {
        if (currentLocation) {
            fetchWeather(currentLocation);
        }
    }, [currentLocation]);

    const fetchWeather = async (location) => {
        const weatherData = await getWeather(location);
        setWeather(weatherData);
    };
    // fetchWeather('Delhi');
    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
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
