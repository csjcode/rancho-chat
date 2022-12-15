import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageContainer from '../../components/PageContainer'
import TokenPrice from '../../components/TokenPrice'
import TokenPriceList from '../../components/TokenPriceList'
import getColors from '../../constants/colors/getColors'
const colorsTheme = getColors()

const TokenScreen = () => {
  const colorsTheme = getColors()
  return (
    <PageContainer>
      <View style={stylesFor(colorsTheme).container}>
        <TokenPriceList />
      </View>
    </PageContainer>
  )
}

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: colorsTheme.backgroundColorSpecial,
    },
  })

export default TokenScreen
