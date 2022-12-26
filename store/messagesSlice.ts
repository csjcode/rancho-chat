import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MessagesData {
  [key: string]: any;
}

interface StarredMessages {
  [key: string]: any;
}

interface MessagesState {
  messagesData: MessagesData;
  starredMessages: StarredMessages;
}

interface SetChatMessagesPayload {
  chatId: string;
  messagesData: MessagesData;
}

interface StarredMessageData {
  messageId: string;
  [key: string]: any;
}

interface AddStarredMessagePayload {
  starredMessageData: StarredMessageData;
}

interface RemoveStarredMessagePayload {
  messageId: string;
}

interface SetStarredMessagesPayload {
  starredMessages: StarredMessages;
}

const initialState: MessagesState = {
  messagesData: {},
  starredMessages: {},
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setChatMessages(state, action: PayloadAction<SetChatMessagesPayload>) {
      const existingMessages = state.messagesData;

      const { chatId, messagesData } = action.payload;

      existingMessages[chatId] = messagesData;

      state.messagesData = existingMessages;
    },
    addStarredMessage(state, action: PayloadAction<AddStarredMessagePayload>) {
      const { starredMessageData } = action.payload;
      state.starredMessages[starredMessageData.messageId] = starredMessageData;
    },
    removeStarredMessage(
      state,
      action: PayloadAction<RemoveStarredMessagePayload>
    ) {
      const { messageId } = action.payload;
      delete state.starredMessages[messageId];
    },
    setStarredMessages(
      state,
      action: PayloadAction<SetStarredMessagesPayload>
    ) {
      const { starredMessages } = action.payload;
      state.starredMessages = { ...starredMessages };
    },
  },
});
export const {
  setChatMessages,
  addStarredMessage,
  removeStarredMessage,
  setStarredMessages,
} = messagesSlice.actions;
export default messagesSlice.reducer;
/*

import { createSlice } from '@reduxjs/toolkit'

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messagesData: {},
    starredMessages: {},
  },
  reducers: {
    setChatMessages: (state, action) => {
      const existingMessages = state.messagesData

      const { chatId, messagesData } = action.payload

      existingMessages[chatId] = messagesData

      state.messagesData = existingMessages
    },
    addStarredMessage: (state, action) => {
      const { starredMessageData } = action.payload
      state.starredMessages[starredMessageData.messageId] = starredMessageData
    },
    removeStarredMessage: (state, action) => {
      const { messageId } = action.payload
      delete state.starredMessages[messageId]
    },
    setStarredMessages: (state, action) => {
      const { starredMessages } = action.payload
      state.starredMessages = { ...starredMessages }
    },
  },
})
export const {
  setChatMessages,
  addStarredMessage,
  removeStarredMessage,
  setStarredMessages,
} = messagesSlice.actions
export default messagesSlice.reducer

*/
