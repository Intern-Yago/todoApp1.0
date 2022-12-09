import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle={"dark-content"} />
      <Routes/>
    </NavigationContainer>
  );
}