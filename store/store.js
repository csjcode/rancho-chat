import authSlice from './authSlice'
import chatSlice from './chatSlice'
import coinsSlice from './coinsSlice'
import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import messagesSlice from './messagesSlice'
import notesSlice from './notesSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    chats: chatSlice,
    messages: messagesSlice,
    menu: menuSlice,
    coins: coinsSlice,
    notes: notesSlice,
  },
})
