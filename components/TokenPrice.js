import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { getSolPrice } from './api'

export default function TokenPrice() {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    getSolPrice().then((price) => setPrice(price))
  }, [])
  return (
    <View style={styles.container}>
      {/* <Button
        title="Update"
        onPress={() => getSolPrice().then((price) => setPrice(price))}
      /> */}
      <View>
        <Text style={styles.text}> SOL </Text>
      </View>
      <View>
        <Text style={styles.text}> ${price} </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  text: { fontSize: 20, textAlign: 'center' },
})
