import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './MainNavigator'
import AuthScreen from '../screens/Auth/AuthScreen'
import { useSelector } from 'react-redux'
import StartUpScreen from '../screens/StartUp/StartUpScreen'
import { logger } from '../utils/logging/console'

const AppNavigator = (props) => {
  logger('component', 'AppNavigator')
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== '',
  )
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin)

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  )
}

export default AppNavigator
