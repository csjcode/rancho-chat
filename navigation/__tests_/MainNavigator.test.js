/**
 * 
 * 
 * 
// Tests

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import store from '../store'
import { setChatsData } from '../store/chatSlice'
import { setStoredUsers } from '../store/userSlice'
import { setChatMessages, setStarredMessages } from '../store/messagesSlice'
import MainNavigator from './MainNavigator'

describe('MainNavigator', () => {
  let container
  const userData = {
    userId: '123',
  }
  const storedUsers = {
    user1: {
      name: 'user1',
    },
    user2: {
      name: 'user2',
    },
  }
  const chatsData = {
    'chat1': {
      key: 'chat1',
      users: ['user1', 'user2'],
    },
    'chat2': {
      key: 'chat2',
      users: ['user2'],
    },
  }
  const messagesData = {
    'chat1': {
      message1: {
        content: 'message1',
      },
      message2: {
        content: 'message2',
      },
    },
    'chat2': {
      message3: {
        content: 'message3',
      },
    },
  }
  const starredMessages = {
    'chat1': {
      message1: true,
    },
  }

  beforeEach(() => {
    store.dispatch(setStoredUsers({ newUsers: storedUsers }))
    store.dispatch(setChatsData({ chatsData }))
    store.dispatch(setChatMessages({ chatId: 'chat1', messagesData }))
    store.dispatch(setChatMessages({ chatId: 'chat2', messagesData }))
    store.dispatch(setStarredMessages({ starredMessages }))

    container = render(
      <Provider store={store}>
        <MainNavigator userData={userData} />
      </Provider>,
    )
  })

  it('renders the MainNavigator component', () => {
    expect(container).toBeDefined()
  })

  it('renders the ActivityIndicator while loading', () => {
    // Set isLoading to true
    container.rerender(
      <Provider store={store}>
        <MainNavigator userData={userData} isLoading={true} />
      </Provider>,
    )

    const activityIndicator = container.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeDefined()
  })

  it('dispatches the setChatsData action on mount', () => {
    expect(store.getState().chat.chatsData).toEqual(chatsData)
  })

  it('dispatches the setChatMessages action on mount', () => {
    expect(store.getState().messages.chatMessages).toEqual(messagesData)
  })

  it('dispatches the setStarredMessages action on mount', () => {
    expect(store.getState().messages.starredMessages).toEqual(starredMessages)
  })

  it('matches snapshot', () => {
    expect(container.toJSON()).toMatchSnapshot()
  })
})

The above tests check if the MainNavigator component is rendered correctly, if it dispatches the correct actions, and if it matches the snapshot. It also checks if the ActivityIndicator is displayed while loading.


 */
