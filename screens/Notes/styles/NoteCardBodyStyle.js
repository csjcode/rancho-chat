import { StyleSheet } from 'react-native'
export const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: colorsTheme.backgroundColorSpecial,
      borderTopColor: '#333',
      borderWidth: 1,
      flex: 1,
      paddingTop: 20,
      width: '100%',
    },
    containerListNotes: {
      marginBottom: 10,
      marginTop: 10,
    },
    dateTimeText: {
      color: 'silver',
      fontSize: 11,
    },
    footerView: { marginTop: 7 },
    geoLatLongText: {
      color: 'silver',
      fontSize: 11,
      fontStyle: 'italic',
    },
    messageText: { color: '#e5e5e5', fontSize: 14 },
    noteListColumn: {
      color: colorsTheme.textColor,
      width: 100,
    },
    textStart: {
      color: colorsTheme.textColor, // width: '50%',
    },
  })
