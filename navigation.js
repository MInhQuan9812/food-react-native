import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import {Provider} from 'react-redux'
import {Themes} from './components/themes/Themes';

import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "./redux/reducers/rootReducer"
import { combineReducers } from "redux";
import cartReducers from "./redux/reducers/cartReducer"

let  reducers = combineReducers({
    cartReducer: cartReducers,
})

const rootReducer = (state,action)=>{
    return reducers(state,action)
}

const stores=configureStore({reducer:{
  root: rootReducer
}})

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

