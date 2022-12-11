import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataItem from '../../components/DataItem'

const SettingsStarMessages = (props) => {
  const starredMessages = useSelector(
    (state) => state.messages.starredMessages ?? {},
  )
  // console.log(userData)
  const sortedStarredMessages = useMemo(() => {
    let result = []

    const chats = Object.values(starredMessages)

    chats.forEach((chat) => {
      const chatMessages = Object.values(chat)
      result = result.concat(chatMessages)
    })

    return result
  }, [starredMessages])

  return (
    <View>
      <DataItem
        type={'link'}
        title="Starred messages"
        hideImage={true}
        onPress={() =>
          props.navigation.navigate('DataList', {
            title: 'Starred messages',
            data: sortedStarredMessages,
            type: 'messages',
          })
        }
      />
    </View>
  )
}

export default SettingsStarMessages

const styles = StyleSheet.create({})
