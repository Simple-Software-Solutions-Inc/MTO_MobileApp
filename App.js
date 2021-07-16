import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import Checkout from './screens/CheckoutScreen';
import AppCheckout from './paypal/Paypal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    // this.action = this.action.bind(this);
    super(props);
    this.state = {
     cart: 0,
     msg: 'Hello',
    };

  }
  

  render(){
    const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options= {{ title: 'Welcome' }}
          
        />
        {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
        <Stack.Screen name="Checkout" component={AppCheckout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}