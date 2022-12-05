import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice.tests'
import chatSlice from './chatSlice.test'
import messagesSlice from './messagesSlice.test'
import userSlice from './userSlice.test'
import menuSlice from './menuSlice.test'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    chats: chatSlice,
    messages: messagesSlice,
    menu: menuSlice,
  },
})
