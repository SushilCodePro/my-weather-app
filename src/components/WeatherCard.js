
import React from 'react';
import WeatherAnimation from './WeatherAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherCard.css'; // Custom styles
import { format } from 'date-fns';

const WeatherCard = ({ weather }) => {
    const now = new Date();
    const formattedDate = format(new Date(), 'MMMM dd, yyyy');
    // const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    return (
        <div className="card weather-card mb-4 shadow-lg">
            <div className="card-body text-center position-relative">
                <div className="date-time">
                    {formattedDate} {formattedTime}
                </div>
                <h4 className="card-title">{weather.location.name}</h4>
                {/* <WeatherAnimation condition={weather.current.weather_descriptions[0]} />
                <h1 className="temperature">{weather.current.temperature}°C</h1> */}
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <WeatherAnimation condition={weather.current.weather_descriptions[0]} />
                        <h1 className="temperature">{weather.current.temperature}°C</h1>
                        <p className="condition">{weather.current.weather_descriptions[0]}</p>
                    </div>
                    <div className="col-12 col-md-6 details">
                        <p>Wind: {weather.current.wind_speed} kmph</p>
                        <p>Feels like: {weather.current.feels_like} °C</p>
                        <p>Pressure: {weather.current.pressure} mb</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default WeatherCard;
