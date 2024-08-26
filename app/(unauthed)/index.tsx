import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from '../../src/Screens/SignupPage';
import LoginPage from '../../src/Screens/LoginPage';
const Stack = createStackNavigator();

const App = () => {
  return ( 
      <Stack.Navigator>
        <Stack.Screen name="SignupPage" component={SignupPage} options={{ headerShown: true }} />
        <Stack.Screen name="LoginPage" component={LoginPage}  options={{ headerShown: true }} />
      </Stack.Navigator>
    
  );
};

export default App;