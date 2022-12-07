import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getSolPrice } from './api'

export default function TokenPrice() {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    getSolPrice().then((price) => setPrice(price))
  }, [])
  return (
    <View key={price} style={styles.tablecontainer}>
      <View style={styles.row}>
        <View style={styles.col1}>
          <Text style={styles.text}>Solana</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.text}>{price}</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.text}>Solana</Text>
        </View>
        <View style={styles.col4}>
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.col1}>
          <Text style={styles.text}>Solana</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.text}>{price}</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.text}>Solana</Text>
        </View>
        <View style={styles.col4}>
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}> Solana Price : $ {price} </Text>
    // </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // borderWidth: 1,
    // borderColor: '#000',
  },
  text: { fontSize: 14 },
  tablecontainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    height: 27,
    flexWrap: 'nowrap',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 6,
  },
  col1: { flex: 5 / 16 },
  col2: { flex: 3 / 16 },
  col3: { flex: 3 / 16 },
  col4: { flex: 3 / 16 },
})
