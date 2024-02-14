import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Seemore from './pages/Seemore';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="See" component={Seemore} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;