import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export const Themes = {
  ...DefaultTheme,
  dark : false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    background : '#000',
    card : '#000',
    text : '#fff',
    textDesciption : '#7f7f7f',
    secondary : '#c71585',
    colorIcon : '#fff'
  },
  fontFamily : {
    bold : 'Poppins-SemiBold',
    regular : 'Poppins-Regular'
  },
  dimen : {
    topHeaderTitleSize : 30
  }
};   