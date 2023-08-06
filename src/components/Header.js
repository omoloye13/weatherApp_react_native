import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = ({ city }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>{city}</Text>
				<Text style={styles.text}>current location</Text>
			</View>
			<View style={styles.wrapper}>
				<TouchableOpacity onPress={() => navigation.navigate('Location')}>
					<Image
						source={require('../assets/icons/Locations.png')}
						style={{ width: 21, height: 21, marginRight: 20 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Image
						source={require('../assets/icons/Settings.png')}
						style={{ width: 21, height: 21 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
		// border: 10,
		// borderColor: 'red',
		// borderWidth: 20,
		paddingHorizontal: 25,
		marginTop: Platform.select({
			ios: '5%',
			android: '15%',
		}),
		justifyContent: 'space-between',
	},
	headerText: {
		color: '#ffff',
		fontFamily: 'ubuntu',
		fontSize: 18,
		// fontWeight: 400,
	},
	text: {
		fontFamily: 'ubuntu',
		textTransform: 'capitalize',
		color: '#fff',
		fontSize: 10,
		marginTop: 5,
	},
	wrapper: {
		flexDirection: 'row',
	},
});
