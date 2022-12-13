import { Appearance } from 'react-native'
import colorsDark from './colorsDark'
import colorsLight from './colorsLight'
import { store } from '../../store/store'

// var count = 1

const getColors = (themeColors) => {
  // console.log(count++)

  console.log(store.getState().menu.storedMenu.themeColorLight)

  const themeColorLight = store.getState().menu.storedMenu.themeColorLight

  // console.log('test')
  // console.log(themeColors)
  // console.log(`Appearance ${Appearance.getColorScheme()}`)
  // const colorScheme = themeColors ? themeColors : Appearance.getColorScheme()

  if (themeColorLight) {
    return colorsLight()
  } else {
    return colorsDark()
  }
}

export const resolveObjKey = (path, obj) => {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null
  }, obj || self)
}

export default getColors
