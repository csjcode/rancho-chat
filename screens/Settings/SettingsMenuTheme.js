import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStoredMenu } from '../../store/menuSlice'
import { Ionicons, Feather } from '@expo/vector-icons'
import getColors from '../../constants/colors/getColors'

const SettingsMenuTheme = (props) => {
  const dispatch = useDispatch()
  const colorsTheme = getColors()
  const menuData = useSelector((state) => state.menu.storedMenu)
  // const colorsTheme = getColors()

  const [themeColorsName, themeColorsNameSet] = useState(
    menuData.themeColorsName,
  )
  // console.log(`themeColorsName state ${themeColorsName}`)
  // console.log(`menuData.themeColorsName state ${menuData.themeColorsName}`)

  console.log(`SettingsMenuTheme menuData ${JSON.stringify(menuData)} `)

  const changeThemeColor = (themeColorsName) => {
    console.log(`changeThemeColor current ${themeColorsName}`)
    const newColor = themeColorsName === 'light' ? 'dark' : 'light'
    console.log(`newColor  ${newColor}`)
    themeColorsNameSet((previousState) => newColor)
    dispatch(setStoredMenu({ ...menuData, themeColorsName: newColor }))
  }
  console.log(props)
  return (
    <TouchableOpacity onPress={() => changeThemeColor(themeColorsName)}>
      <Text style={{ color: 'red' }}>{themeColorsName}</Text>
      <Ionicons
        name={
          menuData.themeColorsName === 'light'
            ? 'moon-outline'
            : 'sunny-outline'
        }
        size={20}
        color={menuData.themeColorsName === 'light' ? 'white' : 'white'}
      />
    </TouchableOpacity>
  )
}

export default SettingsMenuTheme

const styles = StyleSheet.create({})
