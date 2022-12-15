import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import NoteCardHeader from './NoteCardHeader'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const NoteCardBody = (props) => {
  const { id, title, message, dateTime, geoLatLong } = props.item
  // const listKey = `${id}${title.slice(0, 10)}`

  return (
    <>
      <View>
        <Text style={{ color: '#e5e5e5', fontSize: 14 }}>{message}</Text>
      </View>
      <View style={{ marginTop: 7 }}>
        <View>
          <Text
            style={{
              color: 'silver',
              fontSize: 11,
            }}
          >
            Time: {dateTime}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'silver',
              fontSize: 11,
            }}
          >
            Location: {geoLatLong}
          </Text>
        </View>
      </View>
    </>
  )
}
const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: colorsTheme.backgroundColorSpecial,
      borderTopColor: '#333',
      borderWidth: 1,
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

export default NoteCardBody
