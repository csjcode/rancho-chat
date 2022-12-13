import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors/colors'
import getColors from '../constants/colors/getColors'
const colorsTheme = getColors()
// console.log(colorsTheme)

export default PageTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: colorsTheme.backgroundColor,
  },
  text: {
    fontSize: 28,
    color: colorsTheme.textColor,
    fontFamily: 'bold',
    letterSpacing: 0.3,
  },
})
