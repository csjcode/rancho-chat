import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import getColors from '../../constants/colors/getColors'
const colorsTheme = getColors()

const NoteCard = (props) => {
  const { id, title, message, dateTime, geoLatLong } = props.item
  const listKey = `${id}${title.slice(0, 10)}`
  return (
    <View
      style={{
        borderColor: '#0e4429',
        borderWidth: 1,
        marginBottom: 2,
        marginTop: 5,
        padding: 10,
        width: '95%',
      }}
      key={listKey}
    >
      <View
        style={{
          alignItems: 'center',
          borderColor: '#0e4429',
          borderWidth: 0,
          flexDirection: 'row',
          // justifyContent: 'flex-start',
          marginBottom: 5,
          // padding: 10,
          marginTop: 5,
          width: '100%',
        }}
        key={listKey}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => alert('ok')}
            style={{ marginRight: 5 }}
          >
            <FontAwesome name="eye" size={18} color="#28a870" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8 }}>
          <TouchableOpacity onPress={() => alert('ok')}>
            <Text key={listKey} style={{ color: '#e5e5e5', fontSize: 18 }}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => alert('ok')}
            style={{ marginRight: 5 }}
          >
            <FontAwesome name="remove" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ color: '#e5e5e5', fontSize: 14 }}>
          This is a test of the message
        </Text>
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
    </View>
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

export default NoteCard
