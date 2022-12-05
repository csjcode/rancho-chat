/**
 * 
 * 
it('should get user data correctly', () => {
  const expectedUserData = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
  }

  const userId = '12345'
  getUserData(userId).then((userData) => {
    expect(userData).toEqual(expectedUserData)
  })
})

it('should get user chats correctly', () => {
  const expectedUserChats = {
    chat1: {
      message: 'Hi',
    },
    chat2: {
      message: 'Hello',
    },
  }

  const userId = '12345'
  getUserChats(userId).then((userChats) => {
    expect(userChats).toEqual(expectedUserChats)
  })
})

it('should delete user chat correctly', () => {
  const userId = '12345'
  const key = 'chat1'

  deleteUserChat(userId, key).then(() => {
    getUserChats(userId).then((userChats) => {
      expect(userChats).not.toHaveProperty(key)
    })
  })
})

it('should search users correctly', () => {
  const expectedUserData = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
  }

  const queryText = 'John Doe'
  searchUsers(queryText).then((userData) => {
    expect(userData).toEqual(expectedUserData)
  })
})

it('should render snapshot of user data correctly', () => {
  const userId = '12345'
  getUserData(userId).then((userData) => {
    const tree = renderer.create(userData).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('should render snapshot of user chats correctly', () => {
  const userId = '12345'
  getUserChats(userId).then((userChats) => {
    const tree = renderer.create(userChats).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// These tests check that the getUserData function correctly returns the expected user data when provided a userId, that the getUserChats function correctly returns the expected user chats when provided a userId, that the deleteUserChat function correctly deletes the specified chat, that the searchUsers function correctly searches for the specified user, and that the snapshots of the user data and user chats are correctly rendered.


 */
