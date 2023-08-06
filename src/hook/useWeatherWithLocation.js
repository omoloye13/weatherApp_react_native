import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '60eba04b174d7ad05c277b81fc3abdeb'; // Replace with your actual API key

const useWeatherWithLocation = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [iconUrl, setIconUrl] = useState('');

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();

				if (status !== 'granted') {
					alert('Location permission denied');
					return;
				}

				let location = await Location.getCurrentPositionAsync({});
				console.log(location);
				const { latitude, longitude } = location.coords;
				console.log(location.coords);

				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
				);
				console.log(response.data);

				setWeatherData(response.data);
				setLoading(false);
				// Get weather condition icon
				const iconCode = response.data.weather[0].icon;
				setIconUrl(`http://openweathermap.org/img/w/${iconCode}.png`);
			} catch (error) {
				console.error('Error fetching data:', error);
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return { weatherData, loading, iconUrl };
};

export default useWeatherWithLocation;
