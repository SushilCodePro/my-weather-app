import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherAnimation.css'; // Custom CSS for animations

const WeatherAnimation = ({ condition }) => {
    return (
        <div className="weather-animation mt-3">
            {condition.toLowerCase().includes('rain') && <div className="rain-animation">🌧️</div>}
            {/* Add more animations based on the condition */}
        </div>
    );
};

export default WeatherAnimation;
