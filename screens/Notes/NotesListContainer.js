import { StyleSheet, Text, View } from 'react-native'

import NoteCardsList from './NoteCardsList'
import React from 'react'
import { dataSample } from './data/dateSample'
import getColors from '../../constants/colors/getColors'

const NotesListContainer = () => {
  const colorsTheme = getColors()
  return (
    <View style={stylesFor(colorsTheme).containerListNotes}>
      <Text style={stylesFor(colorsTheme).textStart}>Notes</Text>
      <NoteCardsList dataSample={dataSample} />
    </View>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    containerListNotes: {
      marginTop: 10,
      marginBottom: 10,
    },
    textStart: {
      color: colorsTheme.textColor,
      // width: '50%',
    },
  })

export default NotesListContainer
