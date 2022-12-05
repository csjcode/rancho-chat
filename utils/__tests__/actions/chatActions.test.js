/**
 * 
import {
  child,
  get,
  getDatabase,
  push,
  ref,
  remove,
  set,
  update,
} from 'firebase/database'
import { getFirebaseApp } from '../firebaseHelper'
import { addUserChat, deleteUserChat, getUserChats } from './userActionstest.'

export const createChat = async (loggedInUserId, chatData) => {
  const newChatData = {
    ...chatData,
    createdBy: loggedInUserId,
    updatedBy: loggedInUserId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  const app = getFirebaseApp()
  const dbRef = ref(getDatabase(app))
  const newChat = await push(child(dbRef, 'chats'), newChatData)

  const chatUsers = newChatData.users
  for (let i = 0; i < chatUsers.length; i++) {
    const userId = chatUsers[i]
    await push(child(dbRef, `userChats/${userId}`), newChat.key)
  }

  return newChat.key
}

export const sendTextMessage = async (
  chatId,
  senderId,
  messageText,
  replyTo,
) => {
  await sendMessage(chatId, senderId, messageText, null, replyTo, null)
}

export const sendInfoMessage = async (chatId, senderId, messageText) => {
  await sendMessage(chatId, senderId, messageText, null, null, 'info')
}

export const sendImage = async (chatId, senderId, imageUrl, replyTo) => {
  await sendMessage(chatId, senderId, 'Image', imageUrl, replyTo, null)
}

export const updateChatData = async (chatId, userId, chatData) => {
  const app = getFirebaseApp()
  const dbRef = ref(getDatabase(app))
  const chatRef = child(dbRef, `chats/${chatId}`)

  await update(chatRef, {
    ...chatData,
    updatedAt: new Date().toISOString(),
    updatedBy: userId,
  })
}

const sendMessage = async (
  chatId,
  senderId,
  messageText,
  imageUrl,
  replyTo,
  type,
) => {
  const app = getFirebaseApp()
  const dbRef = ref(getDatabase())
  const messagesRef = child(dbRef, `messages/${chatId}`)

  const messageData = {
    sentBy: senderId,
    sentAt: new Date().toISOString(),
    text: messageText,
  }

  if (replyTo) {
    messageData.replyTo = replyTo
  }

  if (imageUrl) {
    messageData.imageUrl = imageUrl
  }

  if (type) {
    messageData.type = type
  }

  await push(messagesRef, messageData)

  const chatRef = child(dbRef, `chats/${chatId}`)
  await update(chatRef, {
    updatedBy: senderId,
    updatedAt: new Date().toISOString(),
    latestMessageText: messageText,
  })
}

export const starMessage = async (messageId, chatId, userId) => {
  try {
    const app = getFirebaseApp()
    const dbRef = ref(getDatabase(app))
    const childRef = child(
      dbRef,
      `userStarredMessages/${userId}/${chatId}/${messageId}`,
    )

    const snapshot = await get(childRef)

    if (snapshot.exists()) {
      // Starred item exists - Un-star
      await remove(childRef)
    } else {
      // Starred item does not exist - star
      const starredMessageData = {
        messageId,
        chatId,
        starredAt: new Date().toISOString(),
      }

      await set(childRef, starredMessageData)
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeUserFromChat = async (
  userLoggedInData,
  userToRemoveData,
  chatData,
) => {
  const userToRemoveId = userToRemoveData.userId
  const newUsers = chatData.users.filter((uid) => uid !== userToRemoveId)
  await updateChatData(chatData.key, userLoggedInData.userId, {
    users: newUsers,
  })

  const userChats = await getUserChats(userToRemoveId)

  for (const key in userChats) {
    const currentChatId = userChats[key]

    if (currentChatId === chatData.key) {
      await deleteUserChat(userToRemoveId, key)
      break
    }
  }

  const messageText =
    userLoggedInData.userId === userToRemoveData.userId
      ? `${userLoggedInData.firstName} left the chat`
      : `${userLoggedInData.firstName} removed ${userToRemoveData.firstName} from the chat`

  await sendInfoMessage(chatData.key, userLoggedInData.userId, messageText)
}

export const addUsersToChat = async (
  userLoggedInData,
  usersToAddData,
  chatData,
) => {
  const existingUsers = Object.values(chatData.users)
  const newUsers = []

  let userAddedName = ''

  usersToAddData.forEach(async (userToAdd) => {
    const userToAddId = userToAdd.userId

    if (existingUsers.includes(userToAddId)) return

    newUsers.push(userToAddId)

    await addUserChat(userToAddId, chatData.key)

    userAddedName = `${userToAdd.firstName} ${userToAdd.lastName}`
  })

  if (newUsers.length === 0) {
    return
  }

  await updateChatData(chatData.key, userLoggedInData.userId, {
    users: existingUsers.concat(newUsers),
  })

  const moreUsersMessage =
    newUsers.length > 1 ? `and ${newUsers.length - 1} others ` : ''
  const messageText = `${userLoggedInData.firstName} ${userLoggedInData.lastName} added ${userAddedName} ${moreUsersMessage}to the chat`
  await sendInfoMessage(chatData.key, userLoggedInData.userId, messageText)
}

// Unit tests
describe('User Actions Test', () => {
  it('Create Chat Test', async () => {
    const result = await createChat('123', {
      users: ['123', '456'],
    })
    expect(result).toBeDefined()
  })

  it('Send Text Message Test', async () => {
    const result = await sendTextMessage('123', '456', 'Hello', null)
    expect(result).toBeDefined()
  })

  it('Send Info Message Test', async () => {
    const result = await sendInfoMessage('123', '456', 'Hello')
    expect(result).toBeDefined()
  })

  it('Send Image Test', async () => {
    const result = await sendImage('123', '456', 'image.jpg', null)
    expect(result).toBeDefined()
  })

  it('Update Chat Data Test', async () => {
    const result = await updateChatData('123', '456', {
      users: ['123', '456'],
    })
    expect(result).toBeDefined()
  })

  it('Star Message Test', async () => {
    const result = await starMessage('123', '456', '789')
    expect(result).toBeDefined()
  })

  it('Remove User From Chat Test', async () => {
    const result = await removeUserFromChat(
      { userId: '123', firstName: 'Test' },
      { userId: '456', firstName: 'Test2' },
      { key: '789', users: ['123', '456'] },
    )
    expect(result).toBeDefined()
  })

  it('Add Users To Chat Test', async () => {
    const result = await addUsersToChat(
      { userId: '123', firstName: 'Test', lastName: 'User' },
      [{ userId: '456', firstName: 'Test2', lastName: 'User2' }],
      { key: '789', users: ['123'] },
    )
    expect(result).toBeDefined()
  })
})

// Snapshot test
it('Create Chat Snapshot Test', async () => {
  const result = await createChat('123', {
    users: ['123', '456'],
  })
  expect(result).toMatchSnapshot()
})

// The tests above test the userActionstest.js file. The first test checks that the createChat function returns a value when given two parameters. The second test checks that the sendTextMessage function returns a value when given four parameters. The third test checks that the sendInfoMessage function returns a value when given three parameters. The fourth test checks that the sendImage function returns a value when given four parameters. The fifth test checks that the updateChatData function returns a value when given three parameters. The sixth test checks that the starMessage function returns a value when given three parameters. The seventh test checks that the removeUserFromChat function returns a value when given three parameters. The eighth test checks that the addUsersToChat function returns a value when given three parameters. The snapshot test checks that the createChat function returns a value that matches a given snapshot.
 */
