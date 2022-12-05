import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Speech } from "expo";

const TextToSpeech: React.FC = () => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const toggleSpeak = () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      Speech.speak(text);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    Speech.addListener(({ error }) => {
      if (error) {
        console.log(error);
        setIsSpeaking(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Enter Text to Speech:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setText(text);
        }}
        value={text}
      />
      <Button title={isSpeaking ? "Stop" : "Speak"} onPress={toggleSpeak} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
  },
});

export default TextToSpeech;

// In this code, we are using the React and React Native libraries to create a component that enables text-to-speech in React Native. We use the useState hook to create two variables which store the state of whether the text-to-speech is currently speaking and what the text is that needs to be spoken. We then have a toggleSpeak function which will either start or stop the text-to-speech based on the current state. We also use the useEffect hook to add an event listener for error events which will be triggered if an error occurs. Lastly, we have the View component which contains the text input and button which will be used to control the text-to-speech.
