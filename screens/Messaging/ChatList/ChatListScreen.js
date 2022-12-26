import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import CustomHeaderButton from '../../../components/CustomHeaderButton'
import DataItem from '../../../components/DataItem'
import PageContainer from '../../../components/PageContainer'
import PageTitle from '../../../components/PageTitle'
import colors from '../../../constants/colors/colors'
import getColors from '../../../constants/colors/getColors'
const colorsTheme = getColors()

const ChatListScreen = (props) => {
  const colorsTheme = getColors()
  const selectedUser = props.route?.params?.selectedUserId
  const selectedUserList = props.route?.params?.selectedUsers
  const chatName = props.route?.params?.chatName

  const userData = useSelector((state) => state.auth.userData)
  const storedUsers = useSelector((state) => state.users.storedUsers)
  const userChats = useSelector((state) => {
    const chatsData = state.chats.chatsData
    return Object.values(chatsData).sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt)
    })
  })

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons
            style={stylesFor(colorsTheme).headerButton}
            HeaderButtonComponent={CustomHeaderButton}
          >
            <Item
              title="New chat"
              iconName="create-outline"
              onPress={() => props.navigation.navigate('NewChat')}
            />
          </HeaderButtons>
        )
      },
    })
  }, [])

  useEffect(() => {
    if (!selectedUser && !selectedUserList) {
      return
    }

    let chatData
    let navigationProps

    if (selectedUser) {
      chatData = userChats.find(
        (cd) => !cd.isGroupChat && cd.users.includes(selectedUser),
      )
    }

    if (chatData) {
      navigationProps = { chatId: chatData.key }
    } else {
      const chatUsers = selectedUserList || [selectedUser]
      if (!chatUsers.includes(userData.userId)) {
        chatUsers.push(userData.userId)
      }

      navigationProps = {
        newChatData: {
          users: chatUsers,
          isGroupChat: selectedUserList !== undefined,
          chatName,
        },
      }
    }

    props.navigation.navigate('ChatScreen', navigationProps)
  }, [props.route?.params])

  return (
    <PageContainer style={stylesFor(colorsTheme).pageContainer}>
      {/* <PageTitle text="Chats" /> */}

      <View style={stylesFor(colorsTheme).rowNewButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('NewChat', { isGroupChat: true })
          }
        >
          <View style={stylesFor(colorsTheme).rowNewButtons}>
            <AntDesign name="addusergroup" size={24} color="blue" />
            <Text style={stylesFor(colorsTheme).newGroupText}>New Group</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('NewChat', { isGroupChat: false })
          }
        >
          <View style={stylesFor(colorsTheme).rowNewButtons}>
            <Ionicons name="create-outline" size={24} color="blue" />
            <Text style={stylesFor(colorsTheme).newGroupText}>New Chat</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={userChats}
        renderItem={(itemData) => {
          const chatData = itemData.item
          const chatId = chatData.key
          const isGroupChat = chatData.isGroupChat

          let title = ''
          const subTitle = chatData.latestMessageText || 'New chat'
          let image = ''

          if (isGroupChat) {
            title = chatData.chatName
            image = chatData.chatImage
          } else {
            const otherUserId = chatData.users.find(
              (uid) => uid !== userData.userId,
            )
            const otherUser = storedUsers[otherUserId]

            if (!otherUser) return

            title = `${otherUser.firstName} ${otherUser.lastName}`
            image = otherUser.profilePicture
          }

          return (
            <View style={stylesFor(colorsTheme).dataItemView}>
              <DataItem
                title={title}
                subTitle={subTitle}
                image={image}
                onPress={() =>
                  props.navigation.navigate('ChatScreen', { chatId })
                }
              />
            </View>
          )
        }}
      />
    </PageContainer>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorsTheme.backgroundColor,
    },
    headerButton: { zIndex: 9999 },
    newGroupText: {
      color: colorsTheme.blue,
      fontSize: 17,
      marginBottom: 8,
      marginLeft: 3,
      marginRight: 15,
    },
    pageContainer: { backgroundColor: colorsTheme.backgroundColor },
    rowNewButtons: { flexDirection: 'row' },
    rowNewButtonsContainer: { flexDirection: 'row' },
    newButton: {},
    dataItemView: { marginBottom: 7 },
  })

export default ChatListScreen
