import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { getSolEcoPrices } from './apiTokenPrices'
import getColors from '../constants/getColors'
const colorsTheme = getColors()

export default function TokenPrice() {
  const [counter, setCounter] = useState(0)

  const [priceList, priceListSet] = useState({})

  const RowTable = () => {
    console.log(Object.keys(priceList))

    var sortingArr = ['solana', 'chainlink', 'stepn', 'audius', 'msol']

    const modPriceList = Object.keys(priceList).sort(
      (a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b),
    )

    return modPriceList.map((tokenName, key) => {
      const price = parseFloat(priceList[tokenName].usd).toFixed(2)
      return (
        <View key={price} style={styles.row}>
          <View style={styles.col1}>
            <Text style={styles.text}>{tokenName}</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.text}>{price}</Text>
          </View>
          <View style={styles.col3}>
            <Text style={styles.text}></Text>
          </View>
          <View style={styles.col4}>
            <Text style={styles.text}></Text>
          </View>
        </View>
      )
    })
  }

  useEffect(() => {
    getSolEcoPrices().then((data) => {
      priceListSet(data)
    })
  }, [counter])

  return (
    <View style={styles.tableContainer}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title={'Update Prices'}
          onPress={() => setCounter(counter + 1)}
        ></Button>
      </View>

      <View style={styles.rowHeader}>
        <View style={styles.col1}>
          <Text style={styles.textHeader}>NAME</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.textHeader}>PRICE ($USD)</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.col4}>
          <Text style={styles.text}></Text>
        </View>
      </View>
      <RowTable />
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    fontSize: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // borderWidth: 1,
    // borderColor: '#000',
  },
  text: { fontSize: 18, color: colorsTheme.textColor },
  textHeader: { fontSize: 12, color: colorsTheme.textColorSecondary },
  tableContainer: {
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
  rowHeader: {
    flexDirection: 'row',
    height: 20,
    flexWrap: 'nowrap',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  col1: { flex: 4 / 16, alignItems: 'flex-start' },
  col2: { flex: 4 / 16, alignItems: 'flex-end' },
  col3: { flex: 4 / 16 },
  col4: { flex: 4 / 16 },
})
