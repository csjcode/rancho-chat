import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors/colors";
import getColors from "../constants/colors/getColors";
const colorsTheme = getColors();
// console.log(colorsTheme)

const PageTitle = (props: { text: string }) => {
  const colorsTheme = getColors();
  return (
    <View style={stylesFor(colorsTheme).container}>
      <Text style={stylesFor(colorsTheme).text}>{props.text}</Text>
    </View>
  );
};

const stylesFor = (colorsTheme: any) =>
  StyleSheet.create({
    container: {
      marginBottom: 10,
      backgroundColor: colorsTheme.backgroundColor,
    },
    text: {
      fontSize: 28,
      color: colorsTheme.textColor,
      fontFamily: "bold",
      letterSpacing: 0.3,
    },
  });

export default PageTitle;
