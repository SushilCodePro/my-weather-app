import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationInput = ({ onLocationChange }) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLocationChange(location);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                />
                <button type="submit" className="btn bg-success text-white">Get Weather</button>
            </div>
        </form>
    );
};

export default LocationInput;
