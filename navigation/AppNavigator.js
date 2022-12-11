import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import MainNavigator from './MainNavigator'
import AuthScreen from '../screens/Login/Auth/AuthScreen'
import { useSelector } from 'react-redux'
import StartUpScreen from '../screens/Login/StartUp/StartUpScreen'
import { logger } from '../utils/logging/console'

const AppNavigator = (props) => {
  logger('component', 'AppNavigator')
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== '',
  )
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin)

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      blue: '#3498db',
      lightGrey: '#bdc3c7',
      extraLightGrey: '#ededed',
      nearlyWhite: '#F4F8F7',
      grey: '#7f8c8d',
      textColor: '#1c1e21',
      primary: '#32d48e',
      red: '#e74c3c',
      beige: '#FEF5C3',
      solanaGreen: '#14F195',
      solanaPurple: '#9945FF',
      menuIcon: '#9945FF',
    },
  }
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  )
}

export default AppNavigator
