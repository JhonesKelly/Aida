import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: { backgroundColor: '#4c899a' },
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTintColor: '#f8f8f8',
                    height: 10,
                }}
            >
                <Stack.Screen name="Record" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator;