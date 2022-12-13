import React, { useEffect, useState } from 'react'
import { MainNavigatorTab } from './MainNavigatorTab'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ContactScreen from '../screens/Contact/ContactScreen'
import ChatSettingsScreen from '../screens/Messaging/ChatSettings/ChatSettingsScreen'
import ChatScreen from '../screens/Messaging/Chat/ChatScreen'
import NewChatScreen from '../screens/Messaging/NewChat/NewChatScreen'
import TestingScreen from '../screens/Testing/TestingScreen'

import DataListScreen from '../screens/Messaging/DataList/DataListScreen'
import { logger } from '../utils/logging/console'
import Mapview from '../screens/Map/Mapview'
import TokenScreen from '../screens/Tokens/TokenScreen'
import StepsCounterPermissions from '../components/StepsCounterPermissions'
import getColors from '../constants/getColors'
const colorsTheme = getColors()

const Stack = createNativeStackNavigator()

export const MainNavigatorStack = () => {
  // logger('component', 'MainNavigatorStack')

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colorsTheme.tabNavHeader,
          },
          tabBarStyle: {
            backgroundColor: colorsTheme.tabNavHeader,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainNavigatorTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="ChatSettings"
          component={ChatSettingsScreen}
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerTitle: 'Contact info',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="DataList"
          component={DataListScreen}
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="Map"
          component={Mapview}
          options={{
            title: 'Maps',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' },
            headerTitle: 'Local Map',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="TokenScreen"
          component={TokenScreen}
          options={{
            headerTitle: 'Token Screen',
            headerBackTitle: 'Back',
            headerStyle: { borderColor: 'red', borderWidth: 2 },
          }}
        />
        <Stack.Screen
          name="StepsScreen"
          component={StepsCounterPermissions}
          options={{
            headerTitle: 'Steps Screen',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="TestingScreen"
          component={TestingScreen}
          options={{
            headerTitle: 'Testing Screen',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
        <Stack.Screen name="NewChat" component={NewChatScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
