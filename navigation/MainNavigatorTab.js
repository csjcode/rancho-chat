import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import ChatListScreen from '../screens/Messaging/ChatList/ChatListScreen'
import Mapview from '../screens/Map/Mapview'
import TrickScreen from '../screens/Tricks/TrickScreen'
import getColors from '../constants/colors/getColors'

const Tab = createBottomTabNavigator()

export const MainNavigatorTab = (props) => {
  const colorsTheme = getColors()
  const menuData = useSelector((state) => state.menu.storedMenu)
  // console.log(JSON.stringify(menuData))
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colorsTheme.tabNavHeader,
          height: 40,
        },
        headerTitleStyle: {
          color: colorsTheme.mainTabHeaderTitle,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: colorsTheme.tabNavHeader,
        },
      }}
    >
      <Tab.Screen
        name="Chat List"
        // component={ChatListScreen}
        children={() => <ChatListScreen navigation={props.navigation} />}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: colorsTheme.tabNavHeader,
            // height: 25,
          },
          headerTitleStyle: {
            color: colorsTheme.mainTabHeaderTitle,
          },
          // headerTintColor: colorsTheme.tabNavHeader,
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      {menuData.map && (
        <Tab.Screen
          name="Local Maps"
          component={Mapview}
          options={{
            headerShown: false,
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
          children={() => <TrickScreen navigation={props.navigation} />}
          // component={TrickScreen}
          options={{
            headerStyle: {
              backgroundColor: colorsTheme.tabNavHeader,
              // height: 25,
            },
            headerTitleStyle: {
              color: colorsTheme.mainTabHeaderTitle,
            },
            tabBarLabel: 'Tricks',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="robot" size={24} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Settings"
        // component={SettingsScreen}
        children={() => <SettingsScreen />}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: colorsTheme.tabNavHeader,
          },
          headerTitleStyle: {
            color: colorsTheme.mainTabHeaderTitle,
          },
        }}
      />
    </Tab.Navigator>
  )
}
