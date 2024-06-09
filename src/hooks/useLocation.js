import { useState, useEffect } from 'react';

const useLocation = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation(`${latitude},${longitude}`);
            },
            (error) => {
                console.error(error);
                // Handle permission denial or error
            }
        );
    }, []);

    return {
        currentLocation,
        getCurrentLocation: () => navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation(`${latitude},${longitude}`);
            }
        )
    };
};

export default useLocation;
