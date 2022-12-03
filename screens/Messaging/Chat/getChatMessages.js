const getChatMessages = (messageDataSelector, chatId) => {
  if (!chatId) return []

  const chatMessagesData = messageDataSelector.messagesData[chatId]

  if (!chatMessagesData) return []

  const messageList = []
  for (const key in chatMessagesData) {
    const message = chatMessagesData[key]

    messageList.push({
      key,
      ...message,
    })
  }

  return messageList
}
export default getChatMessages
