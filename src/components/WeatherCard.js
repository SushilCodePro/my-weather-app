import React from 'react';
import WeatherAnimation from './WeatherAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherCard = ({ weather }) => {
    return (
        <div className="card mb-4">
            <div className="card-body text-center">
                <h2 className="card-title">{weather.location.name}</h2>
                <p className="card-text">{weather.current.temperature}°C</p>
                <p className="card-text">{weather.current.weather_descriptions[0]}</p>
                <WeatherAnimation condition={weather.current.weather_descriptions[0]} />
            </div>
        </div>
    );
};

export default WeatherCard;
