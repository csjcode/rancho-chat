import { StyleSheet, Text, TextInput, View } from 'react-native'

import colors from '../constants/colors/colors'
import getColors from '../constants/colors/getColors'
import { useState } from 'react'

const colorsTheme = getColors()

const Input = (props) => {
  // console.log(`Input props ${JSON.stringify(props)}`)
  var colorsTheme = getColors()
  const [value, setValue] = useState(props.initialValue)

  const onChangeText = (text) => {
    console.log(text)
    setValue(text)
    props.onInputChanged(props.id, text)
  }

  const styleMerge = (className) => {
    return {
      ...stylesFor(colorsTheme)[className],
      ...props?.addStyles?.[className],
    }
  }

  return (
    <View style={styleMerge('container')}>
      <Text style={styleMerge('label')}>{props.label}</Text>
      <View style={styleMerge('inputContainer')}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={stylesFor(colorsTheme).input}
          />
        )}
        <TextInput
          {...props}
          style={styleMerge('inputText')}
          onChangeText={onChangeText}
          value={value}
        />
      </View>

      {props.errorText && (
        <View style={stylesFor(colorsTheme).errorContainer}>
          <Text style={stylesFor(colorsTheme).errorText}>
            {props.errorText[0]}
          </Text>
        </View>
      )}
    </View>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      // marginBottom: 30,
    },
    label: {
      marginVertical: 8,
      fontFamily: 'bold',
      letterSpacing: 0.3,
      color: colorsTheme.textColor,
    },
    inputContainer: {
      width: '100%',
      // backgroundColor: '#abd5c6',
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 2,
      backgroundColor: colorsTheme.formInputBackgroundColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 10,
      color: colorsTheme.grey,
    },
    input: {
      color: colorsTheme.formInputTextColor,
      fontFamily: 'regular',
      letterSpacing: 0.3,
      paddingTop: 0,
    },
    inputText: {
      paddingLeft: 10,
      paddingRight: 10,
      width: '100%',
      color: colorsTheme.formInputTextColor,
    },
    errorContainer: {
      marginVertical: 5,
    },
    errorText: {
      color: 'red',
      fontSize: 13,
      fontFamily: 'regular',
      letterSpacing: 0.3,
    },
  })

export default Input
