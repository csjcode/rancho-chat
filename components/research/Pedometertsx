import React, { useState, useEffect } from 'react'
import { Dimensions, Platform, Pedometer } from 'react-native-sensors'

interface PedometerProps {
  onStepsChange: (steps: number) => void;
}

const PedometerComponent: React.FC<PedometerProps> = ({ onStepsChange }) => {
  const [currentSteps, setCurrentSteps] = useState(0)

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Pedometer.startPedometerUpdatesFromDate(
        new Date().getTime(),
        (pedometerData: any) => {
          setCurrentSteps(pedometerData.numberOfSteps)
          onStepsChange(pedometerData.numberOfSteps)
        },
      )
    } else {
      Pedometer.watchStepCount((result: any) => {
        setCurrentSteps(result.steps)
        onStepsChange(result.steps)
      })
    }
    return () => {
      Pedometer.stopPedometerUpdates()
    }
  }, [])

  return (
    <>
      <Dimensions.Text>Current Steps: {currentSteps}</Dimensions.Text>
    </>
  )
}

export default PedometerComponent

// This component uses the React Native Sensors library to access the Pedometer API. The component is a functional component that takes a callback function as a prop (onStepsChange) which will be called whenever the steps count changes. Inside the component, we use the useEffect hook to start and stop the pedometer updates depending on the platform. We also set the current steps in the state using the setCurrentSteps hook. Finally, we return a simple text component displaying the current steps count.
