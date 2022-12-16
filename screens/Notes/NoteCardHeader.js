import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import getColors from '../../constants/colors/getColors'
import { stylesFor } from './styles/NoteCardHeaderStyle'

const colorsTheme = getColors()

const NoteCardHeader = (props) => {
  const { id, title } = props.item

  const { messageCardVisible, messageCardVisibleSet, key } = props

  return (
    <View style={stylesFor(colorsTheme).container} key={key}>
      <View style={stylesFor(colorsTheme).bodyView} key={key}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => messageCardVisibleSet(!messageCardVisible)}
            style={stylesFor(colorsTheme).caretRightTouchable}
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
            <Text key={key} style={stylesFor(colorsTheme).titleText}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => alert(`remove ${id}`)}
            style={stylesFor(colorsTheme).removeTouchable}
          >
            <FontAwesome name="remove" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
// const stylesFor = (colorsTheme) => StyleSheet.create({})

export default NoteCardHeader
