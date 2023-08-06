import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Settings from '../screens/Settings';

const StackScreens = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Location' component={Location} />
			<Stack.Screen name='Settings' component={Settings} />
		</Stack.Navigator>
	);
};

export default StackScreens;
