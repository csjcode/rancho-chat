import { Appearance } from 'react-native'
import colorsDark from './colorsDark'
import colorsLight from './colorsLight'

const getColors = (themeColors) => {
  // console.log(themeColors)
  // console.log(`Appearance ${Appearance.getColorScheme()}`)
  // const colorScheme = themeColors ? themeColors : Appearance.getColorScheme()
  const colorScheme = 'dark'
  console.log(colorScheme)
  if (colorScheme === 'light') {
    return colorsLight
  } else {
    return colorsDark
  }
}

export default getColors
