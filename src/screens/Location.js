import {
	Image,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useWeatherWithLocation from '../hook/useWeatherWithLocation';

const Location = () => {
	const navigation = useNavigation();
	const { weatherData, iconUrl } = useWeatherWithLocation();

	const temperature = weatherData?.main?.temp;
	const mainWeather = weatherData?.weather[0]?.main;
	const city = weatherData?.name;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={require('../assets/icons/backArrow.png')}
						style={{ width: 21, height: 21, tintColor: '#616161' }}
					/>
				</TouchableOpacity>

				<Text style={styles.headerText}>select city</Text>
				<TouchableOpacity>
					<Image
						source={require('../assets/icons/add.png')}
						style={{ width: 21, height: 21, tintColor: '#616161' }}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.display}>
				<View>
					<Text style={styles.displayText}>{city}</Text>
					<Text style={styles.text1}>{temperature}°c</Text>
					<Text style={styles.text2}>{mainWeather}</Text>
				</View>

				<Image
					source={
						iconUrl ? { uri: iconUrl } : require('../assets/icons/Drizzle.png')
					}
					style={{ width: 40, height: 40, tintColor: '#616161' }}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Location;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000000',
		width: '100%',
		flex: 1,
	},
	wrapper: {
		flexDirection: 'row',
		paddingHorizontal: '7%',
		justifyContent: 'space-between',
		marginTop: '15%',
	},
	headerText: {
		fontFamily: 'ubuntu',
		fontSize: 18,
		color: '#616161',
		textTransform: 'capitalize',
	},
	display: {
		flexDirection: 'row',
		marginTop: '12%',
		justifyContent: 'space-between',
		paddingHorizontal: '9%',
	},
	displayText: {
		color: '#fff',
		textTransform: 'capitalize',
		fontFamily: 'ubuntu',
	},
	text1: {
		fontFamily: 'ubuntu',
		fontSize: 18,
		color: '#616161',
		textTransform: 'capitalize',
		marginTop: '5%',
	},
	text2: {
		fontFamily: 'ubuntu',
		fontSize: 12,
		color: '#616161',
		textTransform: 'capitalize',
		marginTop: '5%',
	},
});
