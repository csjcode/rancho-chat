import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, View, Text } from 'react-native'

const Mapview = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.99072902289205,
          longitude: -117.2714950486914,
          latitudeDelta: 0.12,
          longitudeDelta: 0.11,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default Mapview
