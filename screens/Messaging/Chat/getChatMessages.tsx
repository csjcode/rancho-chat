const getChatMessages = (
  messageDataSelector: any,
  chatId: string | undefined
): any[] => {
  if (!chatId) return [];

  const chatMessagesData = messageDataSelector.messagesData[chatId];

  if (!chatMessagesData) return [];

  const messageList: any[] = [];
  for (const key in chatMessagesData) {
    const message = chatMessagesData[key];

    messageList.push({
      key,
      ...message,
    });
  }

  return messageList;
};
export default getChatMessages;

/*

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


*/
