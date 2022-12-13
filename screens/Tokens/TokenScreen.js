import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageContainer from '../../components/PageContainer'
import TokenPrice from '../../components/TokenPrice'
import TokenPriceList from '../../components/TokenPriceList'
import getColors from '../../constants/colors/getColors'
const colorsTheme = getColors()

const TokenScreen = () => {
  return (
    <PageContainer>
      <View style={styles.container}>
        <TokenPriceList />
      </View>
    </PageContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})

export default TokenScreen
