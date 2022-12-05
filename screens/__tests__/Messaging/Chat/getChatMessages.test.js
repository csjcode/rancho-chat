/**
 * 
// Unit Tests

import getChatMessages from './getChatMessages'

describe('getChatMessages', () => {
  it('returns an empty array when no chatId is passed', () => {
    const messageDataSelector = {
      messagesData: {
        '123': {
          message: 'Hello there',
        },
      },
    }

    const result = getChatMessages(messageDataSelector)

    expect(result).toEqual([])
  })

  it('returns an empty array when no messagesData is present in messageDataSelector', () => {
    const messageDataSelector = {
      messagesData: {},
    }
    const chatId = '123'

    const result = getChatMessages(messageDataSelector, chatId)

    expect(result).toEqual([])
  })

  it('returns an empty array when no messages are present in messagesData for the given chatId', () => {
    const messageDataSelector = {
      messagesData: {
        '123': {},
      },
    }
    const chatId = '123'

    const result = getChatMessages(messageDataSelector, chatId)

    expect(result).toEqual([])
  })

  it('returns an array of messages when messagesData is present in messageDataSelector for the given chatId', () => {
    const messageDataSelector = {
      messagesData: {
        '123': {
          message: 'Hello there',
        },
        '456': {
          message: 'Goodbye',
        },
      },
    }
    const chatId = '123'

    const result = getChatMessages(messageDataSelector, chatId)

    expect(result).toEqual([
      {
        key: '123',
        message: 'Hello there',
      },
    ])
  })

  it('returns an array of messages with snapshot testing when messagesData is present in messageDataSelector for the given chatId', () => {
    const messageDataSelector = {
      messagesData: {
        '123': {
          message: 'Hello there',
        },
        '456': {
          message: 'Goodbye',
        },
      },
    }
    const chatId = '123'

    const result = getChatMessages(messageDataSelector, chatId)

    expect(result).toMatchSnapshot()
  })
})

// The tests above check whether the getChatMessages function returns an empty array when no chatId is passed, when no messagesData is present in messageDataSelector, when no messages are present in messagesData for the given chatId, and when messagesData is present in messageDataSelector for the given chatId. The last test uses snapshot testing to check if the resulting array is as expected.

 */
