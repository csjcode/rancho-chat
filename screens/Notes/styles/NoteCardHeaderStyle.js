import { StyleSheet } from 'react-native'
export const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    bodyView: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 5,
      width: '100%',
    },
    caretRightTouchable: {
      marginRight: 0,
    },
    container: {
      width: '95%',
    },
    removeTouchable: { marginRight: 5 },
    titleText: { color: '#e5e5e5', fontSize: 18 },
  })
