import {
  child,
  get,
  getDatabase,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";
import { addUserChat, deleteUserChat, getUserChats } from "./userActions";

export const createChat = async (loggedInUserId: string, chatData: any) => {
  const newChatData = {
    ...chatData,
    createdBy: loggedInUserId,
    updatedBy: loggedInUserId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const app = getFirebaseApp();
  const dbRef = ref(getDatabase(app));
  const newChat = await push(child(dbRef, "chats"), newChatData);

  const chatUsers = newChatData.users;
  for (let i = 0; i < chatUsers.length; i++) {
    const userId = chatUsers[i];
    await push(child(dbRef, `userChats/${userId}`), newChat.key);
  }

  return newChat.key;
};

export const sendTextMessage = async (
  chatId: string,
  senderId: string,
  messageText: string,
  replyTo: string | null
) => {
  await sendMessage(chatId, senderId, messageText, null, replyTo, null);
};

export const sendInfoMessage = async (
  chatId: string,
  senderId: string,
  messageText: string
) => {
  await sendMessage(chatId, senderId, messageText, null, null, "info");
};

export const sendImage = async (
  chatId: string,
  senderId: string,
  imageUrl: string,
  replyTo: string | null
) => {
  await sendMessage(chatId, senderId, "Image", imageUrl, replyTo, null);
};

export const updateChatData = async (
  chatId: string,
  userId: string,
  chatData: any
) => {
  const app = getFirebaseApp();
  const dbRef = ref(getDatabase(app));
  const chatRef = child(dbRef, `chats/${chatId}`);

  await update(chatRef, {
    ...chatData,
    updatedAt: new Date().toISOString(),
    updatedBy: userId,
  });
};

const sendMessage = async (
  chatId: string,
  senderId: string,
  messageText: string,
  imageUrl: string | null,
  replyTo: string | null,
  type: string | null
) => {
  const app = getFirebaseApp();
  const dbRef = ref(getDatabase());
  const messagesRef = child(dbRef, `messages/${chatId}`);

  const messageData: {
    sentBy: string;
    sentAt: string;
    text: string;
    replyTo?: string;
    imageUrl?: string;
    type?: string;
  } = {
    sentBy: senderId,
    sentAt: new Date().toISOString(),
    text: messageText,
  };

  if (replyTo) {
    messageData.replyTo = replyTo;
  }

  if (imageUrl) {
    messageData.imageUrl = imageUrl;
  }

  if (type) {
    messageData.type = type;
  }

  await push(messagesRef, messageData);

  const chatRef = child(dbRef, `chats/${chatId}`);
  await update(chatRef, {
    updatedBy: senderId,
    updatedAt: new Date().toISOString(),
    latestMessageText: messageText,
  });
};

export const starMessage = async (
  messageId: string,
  chatId: string,
  userId: string
) => {
  try {
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const childRef = child(
      dbRef,
      `userStarredMessages/${userId}/${chatId}/${messageId}`
    );

    const snapshot = await get(childRef);

    if (snapshot.exists()) {
      // Starred item exists - Un-star
      await remove(childRef);
    } else {
      // Starred item does not exist - star
      const starredMessageData = {
        messageId,
        chatId,
        starredAt: new Date().toISOString(),
      };

      await set(childRef, starredMessageData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeUserFromChat = async (
  userLoggedInData: any,
  userToRemoveData: any,
  chatData: any
) => {
  const userToRemoveId = userToRemoveData.userId;
  const newUsers = chatData.users.filter((uid: any) => uid !== userToRemoveId);
  await updateChatData(chatData.key, userLoggedInData.userId, {
    users: newUsers,
  });

  const userChats = await getUserChats(userToRemoveId);

  for (const key in userChats) {
    const currentChatId = userChats[key];

    if (currentChatId === chatData.key) {
      await deleteUserChat(userToRemoveId, key);
      break;
    }
  }

  const messageText =
    userLoggedInData.userId === userToRemoveData.userId
      ? `${userLoggedInData.firstName} left the chat`
      : `${userLoggedInData.firstName} removed ${userToRemoveData.firstName} from the chat`;

  await sendInfoMessage(chatData.key, userLoggedInData.userId, messageText);
};

export const addUsersToChat = async (
  userLoggedInData: any,
  usersToAddData: Array<any>,
  chatData: any
) => {
  const existingUsers = Object.values(chatData.users);
  const newUsers = [] as Array<string>;

  let userAddedName = "";

  usersToAddData.forEach(async (userToAdd) => {
    const userToAddId = userToAdd.userId;

    if (existingUsers.includes(userToAddId)) return;

    newUsers.push(userToAddId);

    await addUserChat(userToAddId, chatData.key);

    userAddedName = `${userToAdd.firstName} ${userToAdd.lastName}`;
  });

  if (newUsers.length === 0) {
    return;
  }

  await updateChatData(chatData.key, userLoggedInData.userId, {
    users: existingUsers.concat(newUsers),
  });

  const moreUsersMessage =
    newUsers.length > 1 ? `and ${newUsers.length - 1} others ` : "";
  const messageText = `${userLoggedInData.firstName} ${userLoggedInData.lastName} added ${userAddedName} ${moreUsersMessage}to the chat`;
  await sendInfoMessage(chatData.key, userLoggedInData.userId, messageText);
};
