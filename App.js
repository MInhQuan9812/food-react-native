/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Home from './screens/Home';
import {View, Text} from 'react-native';
import React from 'react';
import RestaurantDetail from './screens/RestaurantDetail';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootNavigation from './navigation';
export default function App() {
  return <RootNavigation/>
}
