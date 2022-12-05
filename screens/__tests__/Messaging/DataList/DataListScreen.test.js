/**
 * 
// Tests
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { useSelector } from 'react-redux'
import DataListScreen from '../DataListScreen'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}))

const mockStoredUsers = {
  '123': {
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'url',
    about: 'About John Doe',
  },
  '456': {
    firstName: 'Jane',
    lastName: 'Doe',
    profilePicture: 'url',
    about: 'About Jane Doe',
  },
}

const mockUserData = {
  userId: '123',
}

const mockMessagesData = {
  'chat-123': {
    'message-123': {
      text: 'Hello, John',
      sentBy: '456',
      chatId: 'chat-123',
    },
  },
}

describe('DataListScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => {
      if (selector === (state) => state.users.storedUsers) {
        return mockStoredUsers
      } else if (selector === (state) => state.auth.userData) {
        return mockUserData
      } else if (selector === (state) => state.messages.messagesData) {
        return mockMessagesData
      }
    })
  })

  it('renders the correct title', () => {
    const { getByText } = render(
      <DataListScreen route={{ params: { title: 'Test' } }} />
    )
    expect(getByText('Test')).toBeTruthy()
  })

  it('renders a FlatList with the correct data', () => {
    const { getByText } = render(
      <DataListScreen
        route={{ params: { title: 'Test', data: ['123', '456'], type: 'users' } }}
      />
    )
    expect(getByText('John Doe')).toBeTruthy()
    expect(getByText('Jane Doe')).toBeTruthy()
  })

  it('navigates to the correct screen on item press', () => {
    const navigation = {
      navigate: jest.fn(),
    }
    const { getByText } = render(
      <DataListScreen
        navigation={navigation}
        route={{
          params: {
            title: 'Test',
            data: ['123', '456'],
            type: 'users',
            chatId: 'chat-123',
          },
        }}
      />
    )
    fireEvent.press(getByText('Jane Doe'))
    expect(navigation.navigate).toHaveBeenCalledWith(
      'Contact',
      expect.objectContaining({ uid: '456' })
    )
    expect(navigation.navigate).toHaveBeenCalledWith(
      'Contact',
      expect.objectContaining({ chatId: 'chat-123' })
    )
  })

  it('renders the correct message data when type is messages', () => {
    const { getByText } = render(
      <DataListScreen
        route={{
          params: {
            title: 'Test',
            data: [{ chatId: 'chat-123', messageId: 'message-123' }],
            type: 'messages',
            chatId: 'chat-123',
          },
        }}
      />
    )
    expect(getByText('Jane Doe')).toBeTruthy()
    expect(getByText('Hello, John')).toBeTruthy()
  })
})

// Snapshot Test
import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import DataListScreen from '../DataListScreen'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}))

const mockStoredUsers = {
  '123': {
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'url',
    about: 'About John Doe',
  },
  '456': {
    firstName: 'Jane',
    lastName: 'Doe',
    profilePicture: 'url',
    about: 'About Jane Doe',
  },
}

describe('DataListScreen Snapshot Tests', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => {
      if (selector === (state) => state.users.storedUsers) {
        return mockStoredUsers
      }
    })
  })

  it('should match the snapshot', () => {
    const rendered = renderer.create(
      <DataListScreen
        route={{ params: { title: 'Test', data: ['123', '456'], type: 'users' } }}
      />
    )
    expect(rendered).toMatchSnapshot()
  })
})

// Explanation
The above test code includes 5 tests: 
1) The first test checks if the component renders the correct title that was passed in as a prop. 
2) The second test checks if the component renders a FlatList with the correct data that was passed in as a prop. 
3) The third test checks if the component navigates to the correct screen when an item from the FlatList is pressed. 
4) The fourth test checks if the component renders the correct message data when the type is set to 'messages'. 
5) The fifth test is a snapshot test which checks if the component renders correctly.
 */
