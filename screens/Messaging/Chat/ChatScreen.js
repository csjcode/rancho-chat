import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
// import { HeaderBackButton } from '@react-navigation/elements'

// import backgroundImage from '../../../assets/images/solana/Solana_Glass_03.png'
import backgroundImage from '../../../assets/images/droplet.jpeg'
// '../../../assets/images/droplet.jpeg'
import colors from '../../../constants/colors/colors'
import { useTheme } from '@react-navigation/native'

import { useSelector } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import PageContainer from '../../../components/PageContainer'
import Bubble from '../../../components/Bubble'
import {
  createChat,
  sendImage,
  sendTextMessage,
} from '../../../utils/actions/chatActions'
import ReplyTo from '../../../components/ReplyTo'
import {
  launchImagePicker,
  openCamera,
  uploadImageAsync,
} from '../../../utils/imagePickerHelper'

import CustomHeaderButton from '../../../components/CustomHeaderButton'
import ChatFull from './ChatFull'
import chatMessages from './getChatMessages'
import getColors from '../../../constants/colors/getColors'
let colorsTheme = getColors()

const ChatScreen = (props) => {
  let colorsTheme = getColors()
  const [chatUsers, setChatUsers] = useState([])
  const [messageText, setMessageText] = useState('')
  const [chatId, setChatId] = useState(props.route?.params?.chatId)
  const [errorBannerText, setErrorBannerText] = useState('')
  const [replyingTo, setReplyingTo] = useState()
  const [tempImageUri, setTempImageUri] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const userData = useSelector((state) => state.auth.userData)
  const storedUsers = useSelector((state) => state.users.storedUsers)
  const storedChats = useSelector((state) => state.chats.chatsData)
  const messageDataSelector = useSelector((state) => state.messages)

  const { myThemeColors } = useTheme()

  const chatData =
    (chatId && storedChats[chatId]) || props.route?.params?.newChatData || {}

  const getChatTitleFromName = () => {
    const otherUserId = chatUsers.find((uid) => uid !== userData.userId)
    const otherUserData = storedUsers[otherUserId]

    return (
      otherUserData && `${otherUserData.firstName} ${otherUserData.lastName}`
    )
  }

  useEffect(() => {
    if (!chatData) return

    props.navigation.setOptions({
      headerTitle: chatData.chatName ?? getChatTitleFromName(),
      headerStyle: {
        backgroundColor: colorsTheme.chatScreenHeaderStyle,
      },
      headerTitleStyle: {
        color: colorsTheme.chatScreenHeaderTitle,
      },
      headerTintColor: colorsTheme.chatScreenHeaderTint,
      // headerLeft: (props) => (
      //   <HeaderBackButton
      //     {...props}
      //     style={{ headerTintColor: '#ffffff' }}
      //     onPress={() => {
      //       alert('test')
      //     }}
      //   />
      // ),
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            {chatId && (
              <Item
                title="Chat settings"
                iconName="settings-outline"
                onPress={() =>
                  chatData.isGroupChat
                    ? props.navigation.navigate('ChatSettings', { chatId })
                    : props.navigation.navigate('Contact', {
                        uid: chatUsers.find((uid) => uid !== userData.userId),
                      })
                }
              />
            )}
          </HeaderButtons>
        )
      },
    })
    setChatUsers(chatData.users)
  }, [chatUsers])

  const sendMessage = useCallback(async () => {
    try {
      let id = chatId
      if (!id) {
        // No chat Id. Create the chat
        id = await createChat(userData.userId, props.route.params.newChatData)
        setChatId(id)
      }

      await sendTextMessage(
        id,
        userData.userId,
        messageText,
        replyingTo && replyingTo.key,
      )

      setMessageText('')
      setReplyingTo(null)
    } catch (error) {
      console.log(error)
      setErrorBannerText('Message failed to send')
      setTimeout(() => setErrorBannerText(''), 5000)
    }
  }, [messageText, chatId])

  const pickImage = useCallback(async () => {
    try {
      const tempUri = await launchImagePicker()
      if (!tempUri) return

      setTempImageUri(tempUri)
    } catch (error) {
      console.log(error)
    }
  }, [tempImageUri])

  const takePhoto = useCallback(async () => {
    try {
      const tempUri = await openCamera()
      if (!tempUri) return

      setTempImageUri(tempUri)
    } catch (error) {
      console.log(error)
    }
  }, [tempImageUri])

  const uploadImage = useCallback(async () => {
    setIsLoading(true)

    try {
      let id = chatId
      if (!id) {
        // No chat Id. Create the chat
        id = await createChat(userData.userId, props.route.params.newChatData)
        setChatId(id)
      }

      const uploadUrl = await uploadImageAsync(tempImageUri, true)
      setIsLoading(false)

      await sendImage(
        id,
        userData.userId,
        uploadUrl,
        replyingTo && replyingTo.key,
      )
      setReplyingTo(null)

      setTimeout(() => setTempImageUri(''), 500)
    } catch (error) {
      console.log(error)
    }
  }, [isLoading, tempImageUri, chatId])
  // console.log(colors.backgroundImageUri)
  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={stylesFor(colorsTheme).container}
    >
      <ImageBackground
        source={backgroundImage}
        style={stylesFor(colorsTheme).backgroundImage}
      >
        <PageContainer style={{ backgroundColor: 'transparent' }}>
          {!chatId && (
            <Bubble text="This is a new chat. Say hi!" type="system" />
          )}

          {errorBannerText !== '' && (
            <Bubble text={errorBannerText} type="error" />
          )}

          {chatId && (
            <ChatFull
              chatData={chatData}
              chatId={chatId}
              chatMessages={chatMessages(messageDataSelector, chatId)}
              setReplyingTo={setReplyingTo}
            />
          )}
        </PageContainer>

        {replyingTo && (
          <ReplyTo
            text={replyingTo.text}
            user={storedUsers[replyingTo.sentBy]}
            onCancel={() => setReplyingTo(null)}
          />
        )}
      </ImageBackground>

      <View style={stylesFor(colorsTheme).inputContainer}>
        <TouchableOpacity
          style={stylesFor(colorsTheme).mediaButton}
          onPress={pickImage}
        >
          <Feather name="plus" size={24} color={colorsTheme.blue} />
        </TouchableOpacity>

        <TextInput
          style={stylesFor(colorsTheme).textbox}
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
          onSubmitEditing={sendMessage}
        />

        {messageText === '' && (
          <TouchableOpacity
            style={stylesFor(colorsTheme).mediaButton}
            onPress={takePhoto}
          >
            <Feather name="camera" size={24} color={colorsTheme.blue} />
          </TouchableOpacity>
        )}

        {messageText !== '' && (
          <TouchableOpacity
            style={{
              ...stylesFor(colorsTheme).mediaButton,
              ...stylesFor(colorsTheme).sendButton,
            }}
            onPress={sendMessage}
          >
            <Feather name="send" size={20} color={'white'} />
          </TouchableOpacity>
        )}

        <AwesomeAlert
          show={tempImageUri !== ''}
          title="Send image?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Send image"
          confirmButtonColor={colorsTheme.primary}
          cancelButtonColor={colorsTheme.red}
          titleStyle={stylesFor(colorsTheme).popupTitleStyle}
          onCancelPressed={() => setTempImageUri('')}
          onConfirmPressed={uploadImage}
          onDismiss={() => setTempImageUri('')}
          customView={
            <View>
              {isLoading && (
                <ActivityIndicator size="small" color={colorsTheme.primary} />
              )}
              {!isLoading && tempImageUri !== '' && (
                <Image
                  source={{ uri: tempImageUri }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colorsTheme.chatScreenBackgroundColor,
    },
    screen: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 10,
      height: 50,
    },
    textbox: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: colorsTheme.lightGrey,
      marginHorizontal: 15,
      paddingHorizontal: 12,
      color: colorsTheme.chatScreenTextColor,
    },
    mediaButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 35,
    },
    sendButton: {
      backgroundColor: colorsTheme.blue,
      borderRadius: 50,
      padding: 8,
    },
    popupTitleStyle: {
      fontFamily: 'medium',
      letterSpacing: 0.3,
      color: colorsTheme.textColor,
    },
  })

export default ChatScreen
