import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const NoteCardHeader = (props) => {
  const { id, title } = props.item

  const { messageCardVisible, messageCardVisibleSet, listKey } = props

  return (
    <View
      style={{
        width: '95%',
      }}
      key={listKey}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 5,
          width: '100%',
        }}
        key={listKey}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => messageCardVisibleSet(!messageCardVisible)}
            style={{ marginRight: 0 }}
          >
            <FontAwesome
              name={messageCardVisible ? 'caret-down' : 'caret-right'}
              size={20}
              color="#28a870"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10 }}>
          <TouchableOpacity
            onPress={() => messageCardVisibleSet(!messageCardVisible)}
          >
            <Text key={listKey} style={{ color: '#e5e5e5', fontSize: 18 }}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => alert(`remove ${id}`)}
            style={{ marginRight: 5 }}
          >
            <FontAwesome name="remove" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      // backgroundColor: colorsTheme.backgroundColorSpecial,
      // borderTopColor: '#333',
      // borderWidth: 1,
      // flex: 1,
      // paddingTop: 20,
      // width: '100%',
    },
    containerListNotes: {
      // marginBottom: 10,
      // marginTop: 10,
    },
    noteListColumn: {
      // color: colorsTheme.textColor,
      // width: 100,
    },
    textStart: {
      // color: colorsTheme.textColor, // width: '50%',
    },
  })

export default NoteCardHeader
