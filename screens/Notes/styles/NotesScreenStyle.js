import { StyleSheet } from 'react-native'

export const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: colorsTheme.backgroundColorSpecial,
      borderTopColor: '#333',
      borderWidth: 1,
      flex: 1,
      paddingLeft: 5,
      paddingTop: 20,
      width: '100%',
    },
    containerListNotes: {
      marginTop: 10,
      marginBottom: 10,
    },
    textStart: {
      color: colorsTheme.textColor,
      // width: '50%',
    },
    noteListColumn: {
      width: 100,
      color: colorsTheme.textColor,
    },
  })
