import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageContainer from '../../components/PageContainer'
import getColors from '../../constants/colors/getColors'
const colorsTheme = getColors()

const TestingScreen = () => {
  return (
    <View style={stylesFor(colorsTheme).container}>
      <Text>Testing Screen</Text>
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
  })

export default TestingScreen
