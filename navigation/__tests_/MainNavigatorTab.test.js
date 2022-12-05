/**
 * 
 * 
 * 
 * 
 * 
 * 
//Unit Tests:

import React from 'react'
import { render, waitFor, act } from '@testing-library/react-native'
import { useSelector } from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import ChatListScreen from '../screens/Messaging/ChatList/ChatListScreen'
import { logger } from '../utils/logging/console'
import Mapview from '../screens/Map/Mapview'
import TrickScreen from '../screens/Tricks/TrickScreen'

import MainNavigatorTab, { MainNavigatorTab as MainNavigatorTabUnwrapped } from './MainNavigatorTab'
import { initialState as menuInitialState } from '../store/reducers/menu'

const mockedMenu = {
  storedMenu: [
    {
      name: 'ChatList',
      icon: 'chatbubble-outline',
    },
    {
      name: 'Map',
      icon: 'map-o',
    },
    {
      name: 'Tricks',
      icon: 'robot',
    },
    {
      name: 'Settings',
      icon: 'settings-outline',
    },
  ],
}

const mockedMenu2 = {
  storedMenu: [
    {
      name: 'ChatList',
      icon: 'chatbubble-outline',
    },
    {
      name: 'Map',
      icon: 'map-o',
    },
    {
      name: 'Settings',
      icon: 'settings-outline',
    },
  ],
}

const mockedMenu3 = {
  storedMenu: [],
}

describe('MainNavigatorTab', () => {
  let store
  beforeEach(() => {
    store = createStore(state => state, {
      menu: menuInitialState,
    })
  })

  it('renders with no menu items', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu3)

    const { toJSON } = render(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>,
    )

    await waitFor(() => expect(toJSON()).toMatchSnapshot())
  })

  it('renders with 4 menu items', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu)

    const { toJSON } = render(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>,
    )

    await waitFor(() => expect(toJSON()).toMatchSnapshot())
  })

  it('renders with 3 menu items', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu2)

    const { toJSON } = render(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>,
    )

    await waitFor(() => expect(toJSON()).toMatchSnapshot())
  })

  it('should render the correct tab labels', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu)

    const { getByText } = render(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>,
    )

    await waitFor(() => {
      expect(getByText('Chats')).toBeTruthy()
      expect(getByText('Map')).toBeTruthy()
      expect(getByText('Tricks')).toBeTruthy()
      expect(getByText('Settings')).toBeTruthy()
    })
  })

  it('should render the correct icons', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu)

    const { getByTestId } = render(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>,
    )

    await waitFor(() => {
      expect(getByTestId('chatbubble-outline-icon')).toBeTruthy()
      expect(getByTestId('map-o-icon')).toBeTruthy()
      expect(getByTestId('robot-icon')).toBeTruthy()
      expect(getByTestId('settings-outline-icon')).toBeTruthy()
    })
  })

  it('should render the correct components for each tab', async () => {
    store.dispatch = jest.fn().mockImplementation(() => mockedMenu)

    const { getByTestId } = render(
      <Provider store={store}>
        <MainNavigatorTabUnwrapped />
      </Provider>,
    )

    await waitFor(() => {
      expect(getByTestId('chatlist-screen')).toBeTruthy()
      expect(getByTestId('mapview-screen')).toBeTruthy()
      expect(getByTestId('trickscreen-screen')).toBeTruthy()
      expect(getByTestId('settingsscreen-screen')).toBeTruthy()
    })
  })
})

//The tests above check that the MainNavigatorTab component is rendering correctly. The first test checks that the component renders correctly when there are no menu items. The second test checks that the component renders correctly when there are 4 menu items. The third test checks that the component renders correctly when there are 3 menu items. The fourth test checks that the correct tab labels are being rendered. The fifth test checks that the correct icons are being rendered. The sixth test checks that the correct components for each tab are being rendered.


// Test Suite

import 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainNavigatorTab from '../MainNavigatorTab'
import { logger } from '../utils/logging/console'

let store = createStore(() => ({ menu: { storedMenu: [{ map: true }] } }))

describe('MainNavigatorTab Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderer.create(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>
    )
  })
  // Snapshot Test
  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  // Checks if the useSelector Hook is being used
  it('useSelector Hook is called', () => {
    const spy = jest.spyOn(React, 'useSelector')
    wrapper.update(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>
    )
    expect(spy).toHaveBeenCalled()
  })
  // Checks if the logger() is being called
  it('logger() is called', () => {
    const spy = jest.spyOn(logger, 'logger')
    wrapper.update(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>
    )
    expect(spy).toHaveBeenCalled()
  })
  // Checks if the map route is being added when menuData.map is true
  it('renders the correct number of routes', () => {
    wrapper.update(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>
    )
    expect(wrapper.root.findAllByType(Tab.Screen).length).toEqual(4)
  })
  // Checks if the correct icon is being rendered for the map route
  it('renders the correct icon for the "Map" route', () => {
    wrapper.update(
      <Provider store={store}>
        <MainNavigatorTab />
      </Provider>
    )
    expect(
      wrapper
        .root.findByProps({ tabBarLabel: 'Map' })
        .findByType(FontAwesome).props.name
    ).toEqual('map-o')
  })
})

/* 
The above tests are written in Jest, a popular testing framework for React Native. The first test is a snapshot test, which is a type of test that compares the actual output of the component to a stored snapshot. This is a good way to make sure that the component is rendering correctly. The second test checks if the useSelector Hook is being called. The third test checks if the logger() is being called. The fourth test checks if the map route is being added when menuData.map is true. The fifth test checks if the correct icon is being rendered for the map route.


 */
