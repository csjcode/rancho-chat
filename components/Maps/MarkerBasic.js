import { Image, Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Marker, Callout } from 'react-native-maps'

const MarkerBasic = ({ latitude, longitude, coordinate, calloutText }) => {
  // console.log(coordinate[0])
  return (
    <Marker
      coordinate={{
        latitude: coordinate[0],
        longitude: coordinate[1],
      }}
      // image={require('../../assets/images/solana.png')}
      pinColor="#6666ff"
      title="You can also open this callout"
      description="by pressing on transparent area of custom callout"
    >
      <Image
        style={styles.pin}
        source={require('../../assets/images/solana.png')}
      />
      <Callout>
        <View style={styles.calloutView}>
          <Text>{calloutText}</Text>
        </View>
      </Callout>
    </Marker>
  )
}

const styles = StyleSheet.create({
  pin: {
    height: 30,
    width: 30,
  },
  calloutView: { width: 70 },
})

export default MarkerBasic
