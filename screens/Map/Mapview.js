import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker, Callout, Circle, PROVIDER_GOOGLE } from 'react-native-maps'
import MarkerBasic from '../../components/Maps/MarkerBasic'
import getColors from '../../constants/getColors'
const colorsTheme = getColors()

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
      >
        <MarkerBasic
          coordinate={[33.4549573465191, -117.62452558223207]}
          calloutText="Pizza Port San Clemente"
        />
        <MarkerBasic
          coordinate={[33.143444562117345, -117.24808671819535]}
          calloutText="Pizza Port Bressi Ranch"
        />
        <MarkerBasic
          coordinate={[32.998002868388696, -117.27187565619785]}
          calloutText="Pizza Port Solana Beach"
        />
        <MarkerBasic
          coordinate={[32.99078723895634, -117.27046699599921]}
          calloutText="Belly Up"
        />

        <Circle
          center={{
            latitude: 32.99078723895634,
            longitude: -117.27046699599921,
          }}
          radius={150}
          strokeWidth={1}
          strokeColor="#ccc"
          fillColor="rgba(102, 102, 255,0.1)"
        />
      </MapView>
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
