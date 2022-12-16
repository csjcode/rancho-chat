import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { styleProps, stylesFor } from './styles/NoteEditStyles'

import Input from '../../components/Input'
import getColors from '../../constants/colors/getColors'

const colorsTheme = getColors()

const NoteEdit = () => {
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
    </View>
  )
}

export default NoteEdit
