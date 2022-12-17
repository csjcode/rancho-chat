import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'

import AuthScreen from '../screens/Login/Auth/AuthScreen'
import MainNavigator from './MainNavigator'
import React from 'react'
import StartUpScreen from '../screens/Login/StartUp/StartUpScreen'
import { logger } from '../utils/logging/console'
import { useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'

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
