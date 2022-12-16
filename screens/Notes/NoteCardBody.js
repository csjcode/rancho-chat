import React, { useState } from 'react'
import { Text, View } from 'react-native'

import getColors from '../../constants/colors/getColors'
import { stylesFor } from './styles/NoteCardBodyStyle'

const NoteCardBody = (props) => {
  const colorsTheme = getColors()
  const { id, title, message, dateTime, geoLatLong } = props.item

  return (
    <>
      <View>
        <Text style={stylesFor(colorsTheme).messageText}>{message}</Text>
      </View>
      <View style={stylesFor(colorsTheme).footerView}>
        <View>
          <Text style={stylesFor(colorsTheme).dateTimeText}>
            Time: {dateTime}
          </Text>
        </View>
        <View>
          <Text style={stylesFor(colorsTheme).geoLatLongText}>
            Location: {geoLatLong}
          </Text>
        </View>
      </View>
    </>
  )
}

export default NoteCardBody
