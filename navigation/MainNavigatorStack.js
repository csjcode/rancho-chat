import React, { useEffect, useState } from 'react'
import { MainNavigatorTab } from './MainNavigatorTab'

import ContactScreen from '../screens/Contact/ContactScreen'
import ChatSettingsScreen from '../screens/Messaging/ChatSettings/ChatSettingsScreen'
import ChatScreen from '../screens/Messaging/Chat/ChatScreen'
import NewChatScreen from '../screens/Messaging/NewChat/NewChatScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DataListScreen from '../screens/Messaging/DataList/DataListScreen'
import { logger } from '../utils/logging/console'

const Stack = createNativeStackNavigator()

export const MainNavigatorStack = () => {
  logger('component', 'MainNavigatorStack')

  return (
    <Stack.Navigator>
      <Stack.Group>
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
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
        <Stack.Screen name="NewChat" component={NewChatScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}