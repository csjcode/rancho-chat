import { StyleSheet, Text, View } from 'react-native'
import { addStoredNoteList, removeStoredNote } from '../../store/notesSlice'
import { useDispatch, useSelector } from 'react-redux'

import NoteCardsList from './NoteCardsList'
import React from 'react'
import getColors from '../../constants/colors/getColors'

const NotesListContainer = () => {
  const colorsTheme = stylesFor(getColors())
  const storedNotes = useSelector((state) => state.notes.storedNotes.notes)

  return (
    <View style={colorsTheme.containerListNotes}>
      <Text style={colorsTheme.textStart}>Notes</Text>
      <NoteCardsList dataSample={storedNotes} />
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
