import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ImageManipulator from "react-native-image-manipulator";

// Below is an example of a React Native ImageManipulator component written in TypeScript:

interface Props {
  imageUri: string;
}

const ImageManipulatorExample = (props: Props) => {
  const { imageUri } = props;

  const onImageManipulator = async (imageUri: string) => {
    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [
        { resize: { width: 512, height: 512 } },
        { grayscale: true },
        { crop: { originX: 0, originY: 0, width: 512, height: 512 } },
      ],
      { format: "jpeg", compress: 1, base64: false }
    );

    console.log("manipResult", manipResult);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={styles.text} onPress={() => onImageManipulator(imageUri)}>
        Manipulate Image
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "50%",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ImageManipulatorExample;

// This React Native component uses the ImageManipulator module to manipulate a given image. It takes an imageUri as a prop and creates an onImageManipulator function that uses ImageManipulator.manipulateAsync to manipulate the image. This function takes an array of object with different manipulation options (resize, grayscale, crop) and a format object specifying the format, compress rate and base64 status of the image. The manipulated image is then logged to the console. The component also has a Text element with an onPress handler that invokes the onImageManipulator function.
