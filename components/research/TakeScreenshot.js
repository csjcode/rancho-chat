import React, { useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import { captureRef } from 'react-native-view-shot'

const App = () => {
  const imageRef = useRef(null)

  const onCapture = async () => {
    const captured = await captureRef(imageRef, {
      format: 'png',
      quality: 1,
    })
    console.log('Captured', captured)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onCapture}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1555421523-3a9a9072bbe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.image}
          ref={imageRef}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={onCapture}>
        <Text style={styles.buttonText}>Capture</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
})

export default App

// In the above code, we have imported the required components from 'react-native'. We have also imported the captureRef() method from 'react-native-view-shot'.

// We have used useRef() hook to store the reference to the image. We have also defined the onCapture() function which captures the image using the captureRef() method and logs the captured image in the console.

// In the return statement, we have used a TouchableWithoutFeedback component to capture the image on pressing it and a TouchableOpacity component with a text on it to capture the image when pressed.

// Finally, we have defined the styles for the components.

// This is the code for taking screenshot in React Native.
