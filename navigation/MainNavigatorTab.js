import React from 'react'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import ChatListScreen from '../screens/Messaging/ChatList/ChatListScreen'
import { logger } from '../utils/logging/console'
import Mapview from '../screens/Map/Mapview'

const Tab = createBottomTabNavigator()

export const MainNavigatorTab = () => {
  // logger('component', 'MainNavigatorTabs')

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Mapview}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="map" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
