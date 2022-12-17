import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import DataItem from '../../components/DataItem'
import { useSelector } from 'react-redux'

const SettingsStarMessages = (props) => {
  // console.log(props)
  const starredMessages = useSelector(
    (state) => state.messages.starredMessages ?? {},
  )

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
