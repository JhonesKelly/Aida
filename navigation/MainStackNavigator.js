import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Details';
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import {HeaderBackButton} from "react-navigation-stack";

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
                    headerBackButtonMenuEnabled: false,
                    headerBackVisible: false,
                    //headerLeft: false

                }}>
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen  name="Login" component={Login} />
                <Stack.Screen name="Record" component={Home} options={{ presentation: "transparentModal"}}/>
                <Stack.Screen name="Menu" component={Menu} options={{ presentation: "modal",headerBackVisible: true }}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator;