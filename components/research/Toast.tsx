import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootToast } from "react-native-root-toast";

const ToastExample = () => {
  const showToast = () => {
    RootToast.show(
      <View style={styles.toast}>
        <Text style={styles.text}>This is a Toast Message!</Text>
      </View>
    );
  };

  /*
  <RootToast
    position={'bottom'}
    message={'This is a toast message that will disappear after 5 seconds'}
    duration={5000}
  />
  */

  return (
    <View>
      <Text onPress={showToast}>Show Toast</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});

export default ToastExample;

// Explanation: This code uses react-native-root-toast to display a popup toast message on screen. The code first imports the RootToast module from the react-native-root-toast package. It then defines a function showToast which uses the RootToast.show() method to render a toast with a custom view. The custom view consists of a View component with a Text child. The showToast function is then used in the return statement of ToastExample as the onPress handler for a Text component. When the Text is clicked, the showToast function is called, displaying the toast message. Finally, the code defines a StyleSheet to style the toast view.
