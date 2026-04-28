import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './src/screens/Dashboard';
import SocratesLens from './src/screens/SocratesLens';
import TutorChat from './src/screens/TutorChat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0F172A' }
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SocratesLens" component={SocratesLens} />
        <Stack.Screen name="TutorChat" component={TutorChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
