import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageContainer from '../../components/PageContainer'

const TestingScreen = () => {
  return (
    <PageContainer>
      <View style={styles.container}>
        <Text>Testing Screen</Text>
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

export default TestingScreen
