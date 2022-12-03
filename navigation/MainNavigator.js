import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFirebaseApp } from '../utils/firebaseHelper'
import { child, get, getDatabase, off, onValue, ref } from 'firebase/database'
import { setChatsData } from '../store/chatSlice'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
import { setStoredUsers } from '../store/userSlice'
import { setChatMessages, setStarredMessages } from '../store/messagesSlice'
import { MainNavigatorStack } from './MainNavigatorStack'
import { logger } from '../utils/logging/console'

const MainNavigator = (props) => {
  // logger('component', 'MainNavigator')

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  const userData = useSelector((state) => state.auth.userData)
  const storedUsers = useSelector((state) => state.users.storedUsers)

  useEffect(() => {
    console.log('Subscribing to firebase listeners')

    const app = getFirebaseApp()
    const dbRef = ref(getDatabase(app))
    const userChatsRef = child(dbRef, `userChats/${userData.userId}`)
    const refs = [userChatsRef]

    onValue(userChatsRef, (querySnapshot) => {
      const chatIdsData = querySnapshot.val() || {}
      const chatIds = Object.values(chatIdsData)

      const chatsData = {}
      let chatsFoundCount = 0

      for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i]
        const chatRef = child(dbRef, `chats/${chatId}`)
        refs.push(chatRef)

        onValue(chatRef, (chatSnapshot) => {
          chatsFoundCount++

          const data = chatSnapshot.val()

          if (data) {
            if (!data.users.includes(userData.userId)) {
              return
            }

            data.key = chatSnapshot.key

            data.users.forEach((userId) => {
              if (storedUsers[userId]) return

              const userRef = child(dbRef, `users/${userId}`)

              get(userRef).then((userSnapshot) => {
                const userSnapshotData = userSnapshot.val()
                dispatch(setStoredUsers({ newUsers: { userSnapshotData } }))
              })

              refs.push(userRef)
            })

            chatsData[chatSnapshot.key] = data
          }

          if (chatsFoundCount >= chatIds.length) {
            dispatch(setChatsData({ chatsData }))
            setIsLoading(false)
          }
        })

        const messagesRef = child(dbRef, `messages/${chatId}`)
        refs.push(messagesRef)

        onValue(messagesRef, (messagesSnapshot) => {
          const messagesData = messagesSnapshot.val()
          dispatch(setChatMessages({ chatId, messagesData }))
        })

        if (chatsFoundCount == 0) {
          setIsLoading(false)
        }
      }
    })

    const userStarredMessagesRef = child(
      dbRef,
      `userStarredMessages/${userData.userId}`,
    )
    refs.push(userStarredMessagesRef)
    onValue(userStarredMessagesRef, (querySnapshot) => {
      const starredMessages = querySnapshot.val() ?? {}
      dispatch(setStarredMessages({ starredMessages }))
    })

    return () => {
      console.log('Unsubscribing firebase listeners')
      refs.forEach((ref) => off(ref))
    }
  }, [])

  if (isLoading) {
    ;<View style={commonStyles.center}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <MainNavigatorStack />
    </KeyboardAvoidingView>
  )
}

export default MainNavigator
