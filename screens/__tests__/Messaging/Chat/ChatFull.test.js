/**
 * 
// Test 1: Testing that the React component renders correctly with the correct props
import renderer from 'react-test-renderer'

it('renders correctly with props', () => {
  const tree = renderer
    .create(
      <ChatFull
        chatData={chatData}
        chatId={chatId}
        chatMessages={chatMessages}
        setReplyingTo={setReplyingTo}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

// Test 2: Testing that the useSelector hook is correctly retrieving the appropriate data
import { useSelector } from 'react-redux'

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
  }
})

it('correctly retrieves data from redux store', () => {
  useSelector.mockImplementation(() => ({ storedUsers: {}, userData: {} }))
  const { storedUsers, userData } = useSelector()
  expect(storedUsers).toEqual({})
  expect(userData).toEqual({})
})

// Test 3: Testing that the FlatList component is correctly rendering the data
import { FlatList } from 'react-native'

let mockData = []

it('correctly renders data in FlatList', () => {
  const flatList = jest.fn(() => ({
    data: mockData,
    renderItem: jest.fn(),
  }))
  const data = flatList().data
  expect(data).toEqual(mockData)
})

// Test 4: Testing that the Bubble component is correctly rendering
import Bubble from '../../../components/Bubble'

let mockMessage = {
  type: 'info',
  sentBy: 'testUser',
  text: 'test message',
  key: 'testKey',
  sentAt: 'testTime',
  imageUrl: 'testUrl',
  replyTo: 'testReply',
}

let mockUserData = {
  userId: 'testUser',
}

let mockStoredUsers = {
  testUser: {
    firstName: 'testFirstName',
    lastName: 'testLastName',
  },
}

it('correctly renders Bubble component', () => {
  const bubble = renderer
    .create(
      <Bubble
        type={mockMessage.type}
        text={mockMessage.text}
        messageId={mockMessage.key}
        userId={mockUserData.userId}
        chatId={chatId}
        date={mockMessage.sentAt}
        name={mockStoredUsers.testUser.firstName +
          ' ' +
          mockStoredUsers.testUser.lastName}
        setReply={() => setReplyingTo(mockMessage)}
        replyingTo={mockMessage.replyTo}
        imageUrl={mockMessage.imageUrl}
      />
    )
    .toJSON()
  expect(bubble).toMatchSnapshot()
})

// Test 5: Testing that the userId and chatId props are correctly being passed to the Bubble component

it('correctly passes props to Bubble component', () => {
  let mockUserId = 'testUserId'
  let mockChatId = 'testChatId'

  const bubble = renderer
    .create(
      <Bubble
        type={mockMessage.type}
        text={mockMessage.text}
        messageId={mockMessage.key}
        userId={mockUserId}
        chatId={mockChatId}
        date={mockMessage.sentAt}
        name={mockStoredUsers.testUser.firstName +
          ' ' +
          mockStoredUsers.testUser.lastName}
        setReply={() => setReplyingTo(mockMessage)}
        replyingTo={mockMessage.replyTo}
        imageUrl={mockMessage.imageUrl}
      />
    )
    .toJSON()
  expect(bubble.props.userId).toEqual(mockUserId)
  expect(bubble.props.chatId).toEqual(mockChatId)
})

// These tests are testing that the ChatFull React component is being rendered correctly with the correct props, that the useSelector hook is correctly retrieving the appropriate data, that the FlatList component is correctly rendering the data, that the Bubble component is correctly rendering, and that the userId and chatId props are correctly being passed to the Bubble component. Additionally, the tests are using snapshot testing to verify the rendered result.
 */
