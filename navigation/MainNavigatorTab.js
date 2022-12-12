import React from 'react'
import { useSelector } from 'react-redux'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import ChatListScreen from '../screens/Messaging/ChatList/ChatListScreen'
import Mapview from '../screens/Map/Mapview'
import TrickScreen from '../screens/Tricks/TrickScreen'
import getColors from '../constants/getColors'
const colorsTheme = getColors()

const Tab = createBottomTabNavigator()

export const MainNavigatorTab = () => {
  const menuData = useSelector((state) => state.menu.storedMenu)

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colorsTheme.tabNavHeader,
        },
        tabBarStyle: {
          backgroundColor: colorsTheme.tabNavHeader,
        },
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
      {menuData.map && (
        <Tab.Screen
          name="Map"
          component={Mapview}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="map-o" size={24} color={color} />
            ),
          }}
        />
      )}
      {menuData.tricks && (
        <Tab.Screen
          name="Tricks"
          component={TrickScreen}
          options={{
            tabBarLabel: 'Tricks',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="robot" size={24} color={color} />
            ),
          }}
        />
      )}
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
