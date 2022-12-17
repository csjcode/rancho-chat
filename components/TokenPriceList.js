import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { addStoredTokenList, removeStoredCoin } from '../store/coinsSlice'
// const colorsTheme = getColors()
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesome } from '@expo/vector-icons'
import Input from '../components/Input'
import SubmitButton from './SubmitButton'
import getColors from '../constants/colors/getColors'
import { getSolEcoPrices } from './apiTokenPrices'

export default function TokenPrice() {
  const colorsTheme = getColors()
  const dispatch = useDispatch()
  const storedCoins = useSelector((state) => state.coins.storedCoins)
  // console.log(storedCoins)

  const [counter, setCounter] = useState(0)
  const [loading, loadingSet] = useState(0)
  const [visibleRemoveButtons, visibleRemoveButtonsSet] = useState(false)
  const [removeCoin, removeCoinSet] = useState('')
  const [addToken, addTokenSet] = useState(false)
  const [addTokenList, addTokenListSet] = useState('')
  const [updatePrices, updatePricesSet] = useState(true)
  // dispatch(removeStoredCoin({ ...storedCoins, tokenName }))

  const [priceList, priceListSet] = useState({})
  var coinList = storedCoins.coins.filter((item) => item !== removeCoin)

  useEffect(() => {
    if (removeCoin) {
      console.log(`Removing ${removeCoin}`)
      dispatch(removeStoredCoin({ ...storedCoins, removeCoin }))
      removeCoinSet('')
    }
  }, [removeCoin, storedCoins])

  const saveHandlerAddToken = async () => {
    // const saveHandlerAddToken = useCallback(async () => {
    try {
      // setIsLoading(true)
      // await updateSignedInUserData(userData.userId, updatedValues)
      const addTokenListStored = addTokenList.split(',')
      console.log(`addTokenListArr ${addTokenListStored}`)
      dispatch(addStoredTokenList({ ...storedCoins, addTokenListStored }))
      addTokenSet(!addToken)
      updatePricesSet(true)
      visibleRemoveButtonsSet(false)
      // setShowSuccessMessage(true)

      setTimeout(() => {
        // setShowSuccessMessage(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    } finally {
      // setIsLoading(false)
    }
  }
  // , [dispatch])

  const confirmAlertTokenRemove = (type, title, message, tokenName) => {
    return Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log(`OK Pressed for ${tokenName}`)
          // priceListSet(priceList.filter((item) => item !== tokenName))
          removeCoinSet(tokenName)
        },
      },
    ])
  }

  const RowTable = () => {
    // console.log(Object.keys(priceList))

    const modPriceList = Object.keys(priceList).sort(
      (a, b) => coinList.indexOf(a) - coinList.indexOf(b),
    )

    const handleRemoveToken = (tokenName) => {
      return confirmAlertTokenRemove(
        'removeToken',
        'Remove Token',
        `Do you want to remove ${tokenName}?`,
        tokenName,
      )
    }

    if (loading) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 50,
              marginBottom: 50,
              fontSize: 20,
              color: 'white',
            }}
          >
            Loading Prices...
          </Text>
        </View>
      )
    }

    return modPriceList.map((tokenName, key) => {
      const price = parseFloat(priceList[tokenName].usd).toFixed(2)
      return (
        tokenName !== removeCoin &&
        !loading && (
          <View key={price} style={stylesFor(colorsTheme).row}>
            <View style={stylesFor(colorsTheme).col1}>
              <Text style={stylesFor(colorsTheme).text}>
                {visibleRemoveButtons && (
                  <TouchableOpacity
                    onPress={() => handleRemoveToken(tokenName)}
                    style={{ marginRight: 5 }}
                  >
                    <FontAwesome name="remove" size={12} color="red" />
                  </TouchableOpacity>
                )}
                {tokenName}
              </Text>
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
      )
    })
  }

  useEffect(() => {
    const coinListToFetch = coinList.filter((item) => item !== removeCoin)
    loadingSet(true)
    getSolEcoPrices(coinListToFetch).then((data) => {
      priceListSet(data)
      loadingSet(false)
      updatePricesSet(false)
    })
  }, [removeCoin, updatePrices])

  const inputChangedHandler = (id, text) => {
    console.log(`inputChangedHandler`)
    console.log(id, text)
    addTokenListSet(text)
  }

  return (
    <View style={stylesFor(colorsTheme).tableContainer}>
      <View style={stylesFor(colorsTheme).buttonContainer}>
        <Button
          style={stylesFor(colorsTheme).button}
          title={'Update Prices'}
          onPress={() => updatePricesSet(true)}
        ></Button>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            onPress={() => addTokenSet(!addToken)}
            style={{ fontSize: 12, color: 'silver', marginBottom: 10 }}
          >
            {addToken && (
              <FontAwesome name="arrow-circle-left" size={14} color="silver" />
            )}
            {addToken && ' Exit '}
            Add Tokens
          </Text>
        </TouchableOpacity>
        {addToken && (
          <>
            {/* <Text style={{ fontSize: 12, color: 'silver', marginBottom: 10 }}>
              Add input here
            </Text>
            <TouchableOpacity onPress={() => addTokenSet(!addToken)}>
              <Text style={{ fontSize: 12, color: 'silver' }}>GO</Text>
            </TouchableOpacity> */}
            <Input
              id="addTokens"
              label="Add tokens"
              autoCapitalize="none"
              initialValue={''}
              allowEmpty={true}
              onInputChanged={inputChangedHandler}
              addStyles={{
                inputContainer: { paddingHorizontal: 0, paddingVertical: 0 },
                container: { marginBottom: 20 },
              }}
              // errorText={formState.inputValidities['chatName']}
            />
            <SubmitButton
              title="Save"
              onPress={saveHandlerAddToken}
              style={{ width: '100%', marginBottom: 30 }}
              // disabled={!formState.formIsValid}
            />
          </>
        )}
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

      <View>
        <TouchableOpacity
          onPress={() => visibleRemoveButtonsSet(!visibleRemoveButtons)}
        >
          <Text style={{ fontSize: 12, color: 'silver', marginTop: 10 }}>
            {visibleRemoveButtons && (
              <FontAwesome name="arrow-circle-left" size={14} color="silver" />
            )}
            {visibleRemoveButtons && '  Exit '}
            Remove Tokens
          </Text>
        </TouchableOpacity>
      </View>
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
