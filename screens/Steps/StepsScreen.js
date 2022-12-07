import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageContainer from '../../components/PageContainer'
// import StepsCounter from '../../components/StepsCounter'
import StepsCounterPermissions from '../../components/StepsCounterPermissions'

const StepsScreen = () => {
  return (
    <PageContainer>
      <View style={styles.container}>
        {/* <StepsCounter /> */}
        <StepsCounterPermissions />
      </View>
    </PageContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default StepsScreen
