import * as Clipboard from 'expo-clipboard'

import { Feather, FontAwesome } from '@expo/vector-icons'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu'
import React, { useRef } from 'react'

import { formatAmPm } from '../utils/datetimeFormat'
import getColors from '../constants/colors/getColors'
import { starMessage } from '../utils/actions/chatActions'
import { useSelector } from 'react-redux'
import uuid from 'react-native-uuid'
const colorsTheme = getColors()

const MenuItem = (props) => {
  const colorsTheme = getColors()
  const Icon = props.iconPack ?? Feather

  return (
    <MenuOption onSelect={props.onSelect}>
      <View style={stylesFor(colorsTheme).menuItemContainer}>
        <Text style={stylesFor(colorsTheme).menuText}>{props.text}</Text>
        <Icon name={props.icon} size={18} />
      </View>
    </MenuOption>
  )
}

const Bubble = (props) => {
  const {
    text,
    type,
    messageId,
    chatId,
    userId,
    date,
    setReply,
    replyingTo,
    name,
    imageUrl,
  } = props

  const starredMessages = useSelector(
    (state) => state.messages.starredMessages[chatId] ?? {},
  )
  const storedUsers = useSelector((state) => state.users.storedUsers)

  const bubbleStyle = { ...stylesFor(colorsTheme).container }
  const textStyle = { ...stylesFor(colorsTheme).text }
  const wrapperStyle = { ...stylesFor(colorsTheme).wrapperStyle }

  const menuRef = useRef(null)
  const id = useRef(uuid.v4())

  let Container = View
  let isUserMessage = false
  const dateString = date && formatAmPm(date)

  switch (type) {
    case 'system':
      textStyle.color = '#65644A'
      bubbleStyle.backgroundColor = colorsTheme.beige
      bubbleStyle.alignItems = 'center'
      bubbleStyle.marginTop = 10
      break
    case 'error':
      bubbleStyle.backgroundColor = colorsTheme.red
      textStyle.color = 'white'
      bubbleStyle.marginTop = 10
      break
    case 'myMessage':
      wrapperStyle.justifyContent = 'flex-end'
      bubbleStyle.backgroundColor = colorsTheme.bubbleBackgroundColor
      textStyle.color = colorsTheme.bubbleTextColor
      bubbleStyle.maxWidth = '90%'
      Container = TouchableWithoutFeedback
      isUserMessage = true
      break
    case 'theirMessage':
      wrapperStyle.justifyContent = 'flex-start'
      bubbleStyle.maxWidth = '90%'
      Container = TouchableWithoutFeedback
      isUserMessage = true
      textStyle.color = colorsTheme.bubbleTextColor
      break
    case 'reply':
      bubbleStyle.backgroundColor = colorsTheme.bubbleBackgroundColorReply
      textStyle.color = colorsTheme.bubbleTextColor
      break
    case 'info':
      bubbleStyle.backgroundColor = 'white'
      bubbleStyle.alignItems = 'center'
      textStyle.color = colorsTheme.textColor
      break
    default:
      break
  }

  const copyToClipboard = async (text) => {
    try {
      await Clipboard.setStringAsync(text)
    } catch (error) {
      console.log(error)
    }
  }

  const isStarred = isUserMessage && starredMessages[messageId] !== undefined
  const replyingToUser = replyingTo && storedUsers[replyingTo.sentBy]

  return (
    <View style={wrapperStyle}>
      <Container
        onLongPress={() =>
          menuRef.current.props.ctx.menuActions.openMenu(id.current)
        }
        style={{ width: '100%' }}
      >
        <View style={bubbleStyle}>
          {name && type !== 'info' && (
            <Text style={stylesFor(colorsTheme).name}>{name}</Text>
          )}

          {replyingToUser && (
            <Bubble
              type="reply"
              text={replyingTo.text}
              name={`${replyingToUser.firstName} ${replyingToUser.lastName}`}
            />
          )}

          {!imageUrl && <Text style={textStyle}>{text}</Text>}

          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={stylesFor(colorsTheme).image}
            />
          )}

          {dateString && type !== 'info' && (
            <View style={stylesFor(colorsTheme).timeContainer}>
              {isStarred && (
                <FontAwesome
                  name="star"
                  size={14}
                  color={colorsTheme.textColor}
                  style={{ marginRight: 5 }}
                />
              )}
              <Text style={stylesFor(colorsTheme).time}>{dateString}</Text>
            </View>
          )}

          <Menu name={id.current} ref={menuRef}>
            <MenuTrigger />

            <MenuOptions>
              <MenuItem
                text="Copy to clipboard"
                icon={'copy'}
                onSelect={() => copyToClipboard(text)}
              />
              <MenuItem
                text={`${isStarred ? 'Unstar' : 'Star'} message`}
                icon={isStarred ? 'star-o' : 'star'}
                iconPack={FontAwesome}
                onSelect={() => starMessage(messageId, chatId, userId)}
              />
              <MenuItem
                text="Reply"
                icon="arrow-left-circle"
                onSelect={setReply}
              />
            </MenuOptions>
          </Menu>
        </View>
      </Container>
    </View>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    wrapperStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'white',
      borderRadius: 6,
      padding: 5,
      marginBottom: 10,
      borderColor: colorsTheme.bubbleBorderColor,
      borderWidth: 1,
    },
    text: {
      fontFamily: 'regular',
      letterSpacing: 0.3,
    },
    menuItemContainer: {
      flexDirection: 'row',
      padding: 5,
    },
    menuText: {
      flex: 1,
      fontFamily: 'regular',
      letterSpacing: 0.3,
      fontSize: 16,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    time: {
      fontFamily: 'regular',
      letterSpacing: 0.3,
      color: colorsTheme.grey,
      fontSize: 12,
    },
    name: {
      fontFamily: 'medium',
      letterSpacing: 0.3,
      color: colorsTheme.bubbleTextColor,
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: 5,
    },
  })

export default Bubble
