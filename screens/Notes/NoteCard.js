import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import NoteCardBody from './NoteCardBody'
import NoteCardHeader from './NoteCardHeader'
import getColors from '../../constants/colors/getColors'

const NoteCard = (props) => {
  const colorsTheme = stylesFor(getColors())

  const { id, title, message, dateTime, geoLatLong } = props.item
  const listKey = `${id}${title.slice(0, 10)}`

  const [messageCardVisible, messageCardVisibleSet] = useState(false)

  return (
    <View style={colorsTheme.container} key={listKey}>
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
      borderWidth: 1,
      marginBottom: 2,
      marginTop: 5,
      padding: 10,
      width: '95%',
    },
  })

export default NoteCard
