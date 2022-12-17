import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'
import authSlice from './authSlice'
import chatSlice from './chatSlice'
import coinsSlice from './coinsSlice'
import menuSlice from './menuSlice'
import messagesSlice from './messagesSlice'
import notesSlice from './notesSlice'
import userSlice from './userSlice'

const persistNotesConfig = {
  key: 'notes',
  storage: AsyncStorage,
}

const persistedNotes = persistReducer(persistNotesConfig, notesSlice)

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    chats: chatSlice,
    messages: messagesSlice,
    menu: menuSlice,
    coins: coinsSlice,
    notes: persistedNotes,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
export const persistor = persistStore(store)
