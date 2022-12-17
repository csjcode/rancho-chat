import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChatScreen from '../screens/Messaging/Chat/ChatScreen'
import ChatSettingsScreen from '../screens/Messaging/ChatSettings/ChatSettingsScreen'
import ContactScreen from '../screens/Contact/ContactScreen'
import DataListScreen from '../screens/Messaging/DataList/DataListScreen'
import { MainNavigatorTab } from './MainNavigatorTab'
import Mapview from '../screens/Map/Mapview'
import NewChatScreen from '../screens/Messaging/NewChat/NewChatScreen'
import NotesScreen from '../screens/Notes/NotesScreen'
import StepsCounterPermissions from '../components/StepsCounterPermissions'
import TestingScreen from '../screens/Testing/TestingScreen'
import TokenScreen from '../screens/Tokens/TokenScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import getColors from '../constants/colors/getColors'

const colorsTheme = getColors()

const Stack = createNativeStackNavigator()

export const MainNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'none' }}>
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
            headerTintColor: colorsTheme.mainTabHeaderTitle,
            headerStyle: {
              backgroundColor: colorsTheme.tabNavHeader,
            },
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
            headerTintColor: colorsTheme.mainTabHeaderTitle,
            headerStyle: {
              backgroundColor: colorsTheme.tabNavHeader,
            },
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
        <Stack.Screen
          name="NotesScreen"
          component={NotesScreen}
          options={{
            animationEnabled: false,
            title: 'Notes',
            headerTitle: 'Notes',
            headerTintColor: colorsTheme.mainTabHeaderTitle,
            headerStyle: {
              backgroundColor: colorsTheme.tabNavHeader,
            },
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
