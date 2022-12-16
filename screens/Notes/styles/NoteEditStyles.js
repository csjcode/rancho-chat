import { StyleSheet } from 'react-native'
import { resolveObjKey } from '../../../utils/helpers'
export const styleProps = (pick) => {
  const propStyles = {
    toggle: {
      trackColor: {
        off: '#767577',
        on: '#81b0ff',
      },
      thumbColor: {
        off: '#f4f3f4',
        on: '#f5dd4b',
      },
      ios_backgroundColor: '#3e3e3e',
    },
  }
  return resolveObjKey(pick, propStyles) || null
}

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
    locationContainer:{
      marginTop: 0,
      flex: 1,
      alignItems: 'flex-start',
    },
    locationView: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 30,
      width: '100%',
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
