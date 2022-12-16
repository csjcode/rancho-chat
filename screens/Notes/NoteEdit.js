import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { styleProps, stylesFor } from './styles/NoteEditStyles'

import Input from '../../components/Input'
import SubmitButton from '../../components/SubmitButton'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const initialNoteData = {
  title: '',
  message: '',
}

const NoteEdit = () => {
  console.log(`initialNoteData ${JSON.stringify(initialNoteData)}`)
  const [addLocation, addLocationSet] = useState(true)
  const [editNoteData, editNoteDataSet] = useState(initialNoteData)
  const inputChangedHandler = (id, text) => {
    console.log(
      `inside NoteEdit inputChangedHandler - id: ${id}, text: ${text}`,
    )
    initialNoteData[`${id}`] = text
    console.log(initialNoteData)
    // editNoteDataSet((prevState) => (prevState.id = text))
  }
  const handleSubmitEditNote = (message, title) => {
    const newNoteDateTime = new Date.time()

    const submitNoteData = {
      id: '11edc52b-3915-4d71-1058-f8885e29d894',
      type: 'todo',
      title: title,
      message: message,
      geoLatLong: '20.972382846870747, -89.62264760811169',
      geoLatLongTarget: '',
      dateTimeTarget: '',
      date: newNoteDateTime,
      dateTime: '2022-12-15T18:35:28.284',
    }
    // editNoteDataSet(handleSubmitEditNote)
  }
  return (
    <View>
      <Input
        id="title"
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
        id="message"
        label="Message"
        autoCapitalize="none"
        initialValue={''}
        allowEmpty={true}
        onInputChanged={inputChangedHandler}
      />
      <View style={stylesFor(colorsTheme).locationContainer}>
        <View style={stylesFor(colorsTheme).locationView}>
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
            ios_backgroundColor={styleProps('toggle.ios_backgroundColor')}
            onValueChange={() => addLocationSet(!addLocation)}
            value={addLocation}
          />
          <Text style={stylesFor(colorsTheme).textStart}>
            {addLocation ? 'View location ' : ''}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 40, width: '50%' }}>
        <SubmitButton
          title="Add Note"
          onPress={() => handleSubmitEditNote}
          style={{ marginTop: 20 }}
          disabled={false}
        />
      </View>
    </View>
  )
}

export default NoteEdit
