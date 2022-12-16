import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import NoteCardBody from './NoteCardBody'
import NoteCardHeader from './NoteCardHeader'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const NoteCard = (props) => {
  const { id, title, message, dateTime, geoLatLong } = props.item
  const listKey = `${id}${title.slice(0, 10)}`

  const [messageCardVisible, messageCardVisibleSet] = useState(false)

  return (
    <View
      style={{
        borderColor: '#0e4429',
        borderWidth: 2,
        marginBottom: 2,
        marginTop: 5,
        padding: 10,
        width: '95%',
      }}
      key={listKey}
    >
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
      backgroundColor: colorsTheme.backgroundColorSpecial,
      borderTopColor: '#333',
      borderWidth: 0,
      flex: 1,
      paddingTop: 20,
      width: '100%',
    },
    containerListNotes: {
      marginBottom: 10,
      marginTop: 10,
    },
    noteListColumn: {
      color: colorsTheme.textColor,
      width: 100,
    },
    textStart: {
      color: colorsTheme.textColor, // width: '50%',
    },
  })

export default NoteCard
