import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={require('../assets/icons/backArrow.png')}
						style={{ width: 21, height: 21, tintColor: '#616161' }}
					/>
				</TouchableOpacity>

				<Text style={styles.headerText}>settings</Text>
			</View>
			<View style={styles.theme}>
				<Text style={styles.themeText}>theme</Text>
				<View style={styles.darkMode}>
					<View style={styles.checked}>
						<Text style={styles.darkOne}>dark theme</Text>
						<Image
							source={require('../assets/icons/Checked.png')}
							style={{ width: 21, height: 21 }}
						/>
					</View>
					<Text style={styles.darkTwo}>join the dark side</Text>
				</View>
				<View style={styles.lightMode}>
					<Text style={styles.lightOne}>light theme</Text>
					<Text style={styles.lightTwo}>let there be light</Text>
				</View>
				<Text style={styles.feedback}>feedback</Text>
				<View style={styles.lightMode}>
					<Text style={styles.lightOne}>report an issue</Text>
					<Text style={styles.lightTwo}>
						facing an issue? report and we'll look into it
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000000',
		width: '100%',
		flex: 1,
	},
	wrapper: {
		flexDirection: 'row',
		paddingHorizontal: '7%',
		// justifyContent: 'space-around',
		marginTop: '15%',
	},
	headerText: {
		fontFamily: 'ubuntu',
		fontSize: 18,
		color: '#616161',
		textTransform: 'capitalize',
	},
	theme: {
		marginTop: '10%',
		paddingHorizontal: '10%',
	},
	themeText: {
		color: '#fff',
		fontFamily: 'ubuntu',
		fontSize: 24,
		textTransform: 'capitalize',
	},
	darkMode: {
		marginTop: '10%',
	},
	checked: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	lightMode: {
		marginTop: '10%',
	},
	darkOne: {
		color: '#616161',
		fontSize: 18,
		textTransform: 'capitalize',
	},
	darkTwo: {
		color: '#616161',
		fontSize: 12,
		textTransform: 'capitalize',
		marginTop: '2%',
	},
	lightOne: {
		color: '#616161',
		fontSize: 18,
		textTransform: 'capitalize',
	},
	lightTwo: {
		color: '#616161',
		fontSize: 12,
		textTransform: 'capitalize',
		marginTop: '2%',
	},
	feedback: {
		color: '#fff',
		fontFamily: 'ubuntu',
		fontSize: 24,
		textTransform: 'capitalize',
		marginTop: '10%',
	},
});
