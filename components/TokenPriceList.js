import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { getSolEcoPrices } from './apiTokenPrices'
import getColors from '../constants/colors/getColors'
import { useDispatch, useSelector } from 'react-redux'
// const colorsTheme = getColors()

export default function TokenPrice() {
  const colorsTheme = getColors()
  const storedCoins = useSelector((state) => state.coins.storedCoins)
  // console.log(storedCoins)

  const [counter, setCounter] = useState(0)

  const [priceList, priceListSet] = useState({})
  var coinList = storedCoins.coins

  const RowTable = () => {
    console.log(Object.keys(priceList))

    const modPriceList = Object.keys(priceList).sort(
      (a, b) => coinList.indexOf(a) - coinList.indexOf(b),
    )

    return modPriceList.map((tokenName, key) => {
      const price = parseFloat(priceList[tokenName].usd).toFixed(2)
      return (
        <View key={price} style={stylesFor(colorsTheme).row}>
          <View style={stylesFor(colorsTheme).col1}>
            <Text style={stylesFor(colorsTheme).text}>{tokenName}</Text>
          </View>
          <View style={stylesFor(colorsTheme).col2}>
            <Text style={stylesFor(colorsTheme).text}>{price}</Text>
          </View>
          <View style={stylesFor(colorsTheme).col3}>
            <Text style={stylesFor(colorsTheme).text}></Text>
          </View>
          <View style={stylesFor(colorsTheme).col4}>
            <Text style={stylesFor(colorsTheme).text}></Text>
          </View>
        </View>
      )
    })
  }

  useEffect(() => {
    getSolEcoPrices(coinList).then((data) => {
      priceListSet(data)
    })
  }, [counter])

  return (
    <View style={stylesFor(colorsTheme).tableContainer}>
      <View style={stylesFor(colorsTheme).buttonContainer}>
        <Button
          style={stylesFor(colorsTheme).button}
          title={'Update Prices'}
          onPress={() => setCounter(counter + 1)}
        ></Button>
      </View>

      <View style={stylesFor(colorsTheme).rowHeader}>
        <View style={stylesFor(colorsTheme).col1}>
          <Text style={stylesFor(colorsTheme).textHeader}>NAME</Text>
        </View>
        <View style={stylesFor(colorsTheme).col2}>
          <Text style={stylesFor(colorsTheme).textHeader}>PRICE ($USD)</Text>
        </View>
        <View style={stylesFor(colorsTheme).col3}>
          <Text style={stylesFor(colorsTheme).text}></Text>
        </View>
        <View style={stylesFor(colorsTheme).col4}>
          <Text style={stylesFor(colorsTheme).text}></Text>
        </View>
      </View>
      <RowTable />
    </View>
  )
}
const stylesFor = (colorsTheme) =>
  StyleSheet.create({
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
