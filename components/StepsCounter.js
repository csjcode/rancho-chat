import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { PermissionsAndroid } from 'react-native'
import getColors from '../constants/colors/getColors'
const colorsTheme = getColors()

/*

Not currently working

*/

const StepCounter = () => {
  const [numSteps, setNumSteps] = useState(0)
  const [status, setStatus] = useState('')

  console.log(PermissionsAndroid)

  useEffect(() => {
    try {
      setStatus('Available')
      Pedometer.isAvailableAsync().then(
        (result) => {
          if (result) {
            Pedometer.startPedometerUpdatesAsync((updates) => {
              setNumSteps(updates.steps)
            })
          }
        },
        (error) => {
          console.log('Error getting pedometer data: ', error)
        },
      )
    } catch (error) {
      setStatus('Not Available')
    }
  }, [status])

  return (
    <View>
      <Text>Step Counter</Text>
      <Text>You have taken {numSteps} steps</Text>
    </View>
  )
}

export default StepCounter
