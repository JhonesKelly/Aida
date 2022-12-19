import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function FriendsScreen({ navigation: { navigate } }) {
    return (
        <View>
            <Text>This is the home screen of the app</Text>
            <Button
                onPress={() =>
                    navigate('Home')
                }
                title="Go to Brent's profile"
            />
        </View>
    );
}

export default FriendsScreen;

const styles = StyleSheet.create ({
   container: {
     backgroundColor: '#000',
       height: 1000,
   },
});