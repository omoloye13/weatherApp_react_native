import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	ActivityIndicator,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import useWeatherWithLocation from '../hook/useWeatherWithLocation';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();

	SplashScreen.preventAutoHideAsync();
	const { weatherData, loading, iconUrl } = useWeatherWithLocation();

	if (loading) {
		return (
			<ActivityIndicator
				size={'large'}
				style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
			/>
		);
	}

	if (!weatherData) {
		return <Text>Error loading weather data</Text>;
	}
	const temp_minimum = weatherData.main.temp_min;
	const temp_maximum = weatherData.main.temp_max;
	const temperature = weatherData.main.temp;
	const mainWeather = weatherData.weather[0].main;
	// console.log(mainWeather);
	const weatherDescription = weatherData.weather[0].description;
	const city = weatherData.name; // Extract city name from the response
	const localTimestamp = new Date(); // Assuming you have the local timestamp
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const monthsOfYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dayOfWeek = daysOfWeek[localTimestamp.getDay()];
	const month = monthsOfYear[localTimestamp.getMonth()];
	const dayOfMonth = localTimestamp.getDate();
	const year = localTimestamp.getFullYear();

	const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
	// console.log(formattedDate);
	const utcSunriseTimestamp = weatherData.sys.sunrise; // Replace with actual API response
	const utcSunsetTimestamp = weatherData.sys.sunset; // Replace with actual API response

	// Convert UTC timestamps to local time
	const sunrise = new Date(utcSunriseTimestamp * 1000); // Convert to milliseconds
	const sunset = new Date(utcSunsetTimestamp * 1000); // Convert to milliseconds

	// Format local times
	const formatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

	const localSunriseTime = sunrise.toLocaleTimeString('en-US', formatOptions);
	const localSunsetTime = sunset.toLocaleTimeString('en-US', formatOptions);

	return (
		<SafeAreaView style={styles.container}>
			<Header city={city} />
			<View style={styles.wrapper}>
				<Text style={styles.headerText}>in sync</Text>
				<View style={styles.textWrapper}>
					<Text style={styles.dateText}>{formattedDate}</Text>
					<Text style={styles.temp}>{temperature}°c</Text>
				</View>
				<View style={styles.tempWrapper}>
					<View style={styles.downWrapper}>
						<Image
							source={require('../assets/icons/downArrow.png')}
							style={{ width: 21, height: 21 }}
						/>
						<Text style={styles.downText}>{temp_minimum}°C</Text>
					</View>
					<View style={styles.upWrapper}>
						<Image
							source={require('../assets/icons/upArrow.png')}
							style={{ width: 21, height: 21 }}
						/>
						<Text style={styles.upText}>{temp_maximum}°C</Text>
					</View>
				</View>
				<View style={styles.condition}>
					<Image
						source={
							iconUrl
								? { uri: iconUrl }
								: require('../assets/icons/Drizzle.png')
						}
						style={styles.icon}
					/>
					<Text style={styles.weatherText}>{mainWeather}</Text>
				</View>
				<View style={styles.tempWrapper}>
					<View style={styles.downWrapper}>
						<Image
							source={require('../assets/icons/sunrise.png')}
							style={{ width: 21, height: 21 }}
						/>
						<Text style={[styles.downText, { marginLeft: 8 }]}>
							{localSunriseTime}
						</Text>
					</View>
					<View style={styles.upWrapper}>
						<Image
							source={require('../assets/icons/sunset.png')}
							style={{ width: 21, height: 21 }}
						/>
						<Text style={[styles.upText, { marginLeft: 8 }]}>
							{localSunsetTime}
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#000000',
	},
	wrapper: {
		marginTop: '12%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		color: '#fff',
		fontFamily: 'ubuntu',
		fontSize: 10,
	},
	textWrapper: {
		marginTop: '10%',
	},
	dateText: {
		color: '#fff',
		fontFamily: 'ubuntu',
		fontSize: 18,
		textAlign: 'center',
	},
	temp: {
		fontFamily: 'ubuntu',
		fontSize: 96,
		color: '#fff',
		marginTop: '8%',
		// border: 10,
		// borderColor: 'red',
		// borderWidth: 20,
	},
	tempWrapper: {
		flexDirection: 'row',
		marginTop: '8%',
	},
	icon: {
		width: 150,
		height: 128,
		// tintColor: '#fff',
	},
	downWrapper: {
		flexDirection: 'row',
		marginRight: '16%',
		// justifyContent: 'space-between',
	},
	downText: {
		color: '#616161',
		fontFamily: 'ubuntu',
		fontSize: 18,
	},
	upWrapper: {
		flexDirection: 'row',
		marginRight: '5%',
	},
	upText: {
		color: '#616161',
		fontFamily: 'ubuntu',
		fontSize: 18,
	},
	condition: {
		marginTop: '10%',
	},
	weatherText: {
		color: '#616161',
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'ubuntu',
		fontSize: 18,
		marginTop: '7%',
	},
});
