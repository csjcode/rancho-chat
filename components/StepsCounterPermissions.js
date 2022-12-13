import React from 'react'
import {
  Button,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import getColors from '../constants/colors/getColors'
const colorsTheme = getColors()

/*

Not currently working

*/

const requestStepsPermission = async () => {
  try {
    console.log(`checking...`)
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
      {
        title: 'Cool Steps App Steps Permission',
        message:
          'Cool Steps App needs access to your Steps ' +
          'so you can take awesome walks.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )
    console.log(PermissionsAndroid.RESULTS.GRANTED)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Steps')
    } else {
      console.log('Steps permission denied')
    }
  } catch (err) {
    console.warn(err)
  }
}

const StepsCounterPermissions = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestStepsPermission} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default StepsCounterPermissions
