import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import NoteCardBody from './NoteCardBody'
import NoteCardHeader from './NoteCardHeader'
import colors from '../../constants/colors/colors'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const NoteCard = (props) => {
  const { id, title, message, dateTime, geoLatLong } = props.item
  const listKey = `${id}${title.slice(0, 10)}`

  const [messageCardVisible, messageCardVisibleSet] = useState(false)

  return (
    <View style={stylesFor(colorsTheme).container} key={listKey}>
      <NoteCardHeader
        {...props}
        messageCardVisible={messageCardVisible}
        messageCardVisibleSet={messageCardVisibleSet}
      />
      {messageCardVisible && <NoteCardBody {...props} />}
    </View>
  )
}
const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      borderColor: '#0e4429',
      borderWidth: 2,
      marginBottom: 2,
      marginTop: 5,
      padding: 10,
      width: '95%',
    },
  })

export default NoteCard
