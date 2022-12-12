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

  // const scheme = useColorScheme()
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  )
}

export default AppNavigator
