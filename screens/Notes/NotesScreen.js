import React, { useState } from 'react'
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'

import Input from '../../components/Input'
import NoteCard from './NoteCard'
import NoteCardsList from './NoteCardsList'
import { dataSample } from './dateSample'
import getColors from '../../constants/colors/getColors'
import { resolveObjKey } from '../../utils/helpers'
const colorsTheme = getColors()

const EditNote = () => {
  const [addLocation, addLocationSet] = useState(true)
  const inputChangedHandler = () => {}
  return (
    <View>
      <Input
        id="noteTitle"
        label="Title"
        autoCapitalize="none"
        initialValue={''}
        allowEmpty={false}
        onInputChanged={inputChangedHandler}
        addStyles={{
          inputContainer: { paddingHorizontal: 0, paddingVertical: 0 },
          container: { marginBottom: 5 },
        }}
      />
      <Input
        id="noteBody"
        label="Message"
        autoCapitalize="none"
        initialValue={''}
        allowEmpty={true}
        onInputChanged={inputChangedHandler}
        // addStyles={{
        //   inputContainer: { paddingHorizontal: 0, paddingVertical: 0 },
        //   container: { marginBottom: 20 },
        // }}
      />
      <View
        style={{
          marginTop: 0,
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // borderWidth: 1,
            // borderColor: 'red',
            height: 30,
            width: '100%',
          }}
        >
          <Text style={stylesFor(colorsTheme).textStart}>Location: </Text>
          <Text style={stylesFor(colorsTheme).textStart}>
            {addLocation ? 'On' : 'Off'}
          </Text>
          <Switch
            style={{ marginLeft: 5, marginRight: 10 }}
            trackColor={{
              false: styleProps('toggle.trackColor.off'),
              true: styleProps('toggle.trackColor.on'),
            }}
            // thumbColor={
            //   isTricks
            //     ? styleProps('toggle.thumbColor.on')
            //     : styleProps('toggle.thumbColor.off')
            // }
            ios_backgroundColor={styleProps('toggle.ios_backgroundColor')}
            onValueChange={() => addLocationSet(!addLocation)}
            value={addLocation}
          />
          <Text style={stylesFor(colorsTheme).textStart}>
            {addLocation ? 'View location ' : ''}
          </Text>
        </View>
      </View>
    </View>
  )
}

export const NotesListContainer = () => {
  return (
    <View style={stylesFor(colorsTheme).containerListNotes}>
      <Text style={stylesFor(colorsTheme).textStart}>List Notes</Text>
      {/* <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View>
          <Text style={stylesFor(colorsTheme).noteListColumn}>List Notes</Text>
        </View> <View>
          <Text style={stylesFor(colorsTheme).noteListColumn}>List Notes</Text>
        </View>
        <View>
          <Text style={stylesFor(colorsTheme).noteListColumn}>List Notes</Text>
        </View>
        <View>
          <Text style={stylesFor(colorsTheme).noteListColumn}>List Notes</Text>
        </View>
      </View> */}
      <NoteCardsList dataSample={dataSample} />
    </View>
  )
}

export const NotesScreen = () => {
  const [addNoteVisible, addNoteVisibleSet] = useState(false)
  const [listNotesVisible, listNotesVisibleSet] = useState(true)

  return (
    <View style={stylesFor(colorsTheme).container}>
      {/* <Text style={stylesFor(colorsTheme).textStart}>Notes Screen</Text> */}
      <View>
        <TouchableOpacity
          onPress={() => {
            addNoteVisibleSet(!addNoteVisible)
            listNotesVisibleSet(!listNotesVisible)
          }}
        >
          <Text style={stylesFor(colorsTheme).textStart}>
            {!addNoteVisible ? '+ Add Note / - Remove Notes' : '< List Notes'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* List Note */}
      {listNotesVisible && (
        <View>
          <NotesListContainer />
        </View>
      )}
      {/* Add/Edit Note */}

      {addNoteVisible && (
        <View>
          <EditNote
            addNoteVisible={addNoteVisible}
            addNoteVisibleSet={addNoteVisibleSet}
          />
        </View>
      )}
    </View>
  )
}

const styleProps = (pick) => {
  const propStyles = {
    toggle: {
      trackColor: {
        off: '#767577',
        on: '#81b0ff',
      },
      thumbColor: {
        off: '#f4f3f4',
        on: '#f5dd4b',
      },
      ios_backgroundColor: '#3e3e3e',
    },
  }

  return resolveObjKey(pick, propStyles) || null
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
      marginTop: 10,
      marginBottom: 10,
    },
    textStart: {
      color: colorsTheme.textColor,
      // width: '50%',
    },
    noteListColumn: {
      width: 100,

      color: colorsTheme.textColor,
    },
  })

export default NotesScreen
