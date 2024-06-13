import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherAnimation.css'; // Custom styles if needed

const WeatherAnimation = ({ condition }) => {
    const lowerCaseCondition = condition.toLowerCase();

    const getWeatherIcon = () => {
        if (lowerCaseCondition.includes('clear')) return '☀️';
        if (lowerCaseCondition.includes('clouds')) {
            if (lowerCaseCondition.includes('few')) return '🌤️';
            if (lowerCaseCondition.includes('scattered')) return '🌥️';
            if (lowerCaseCondition.includes('broken')) return '☁️';
            return '☁️';
        }
        if (lowerCaseCondition.includes('rain')) {
            if (lowerCaseCondition.includes('light')) return '🌦️';
            if (lowerCaseCondition.includes('moderate')) return '🌧️';
            if (lowerCaseCondition.includes('heavy')) return '🌧️';
            return '🌧️';
        }
        if (lowerCaseCondition.includes('smoke')) return '💨';
        if (lowerCaseCondition.includes('haze')) return '🌫️';
        if (lowerCaseCondition.includes('dust')) return '🌬️';
        if (lowerCaseCondition.includes('fog')) return '🌫️';
      
        return '❓'; 
    };

    return (
        <div className="rain-animationn mt-3">
            <div className="animation-icon">
                {getWeatherIcon()}
            </div>
            {/* <p className="condition-text">{condition}</p> */}
        </div>
    );
};

export default WeatherAnimation;
