import React, { useState } from 'react'
import { Appearance } from 'react-native'
import colorsDark from './colorsDark'
import colorsLight from './colorsLight'
import { store } from '../../store/store'
import { dispatch } from 'react-redux'
import { resolveObjKey } from '../../utils/helpers'

const getColors = (themeColors) => {
  // console.log(store.getState().menu.storedMenu.themeColorsName)

  const themeColorsName = store.getState().menu.storedMenu.themeColorsName

  // store.dispatch({})
  console.log(themeColorsName)

  if (themeColorsName === 'light') {
    return colorsLight()
  } else {
    return colorsDark()
  }
}

export default getColors
