import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStoredMenu, setStoredMenuTest } from '../../store/menuSlice'
import getColors from '../../constants/colors/getColors'
import { resolveObjKey } from '../../utils/helpers'
import SettingsMenuTheme from './SettingsMenuTheme'

const colorsTheme = getColors()

const SettingsToggle = () => {
  const colorsTheme = getColors()
  const dispatch = useDispatch()
  const menuData = useSelector((state) => state.menu.storedMenu)

  const [isMap, isMapSet] = useState(menuData.map)
  const [isTricks, isTricksSet] = useState(menuData.tricks)

  const toggleMap = () => {
    isMapSet((previousState) => !previousState)
    dispatch(setStoredMenu({ ...menuData, map: !isMap }))
  }

  const toggleTricks = () => {
    isTricksSet((previousState) => !previousState)
    dispatch(setStoredMenu({ ...menuData, tricks: !isTricks }))
  }
  return (
    <View style={stylesFor(colorsTheme).container}>
      <View style={stylesFor(colorsTheme).containerRow}>
        <Text style={stylesFor(colorsTheme).switchHeading}>Map</Text>
        <Switch
          trackColor={{
            false: styleProps('toggle.trackColor.off'),
            true: styleProps('toggle.trackColor.on'),
          }}
          thumbColor={
            isTricks
              ? styleProps('toggle.thumbColor.on')
              : styleProps('toggle.thumbColor.off')
          }
          ios_backgroundColor={styleProps('toggle.ios_backgroundColor')}
          onValueChange={toggleMap}
          value={isMap}
        />
        <Text style={stylesFor(colorsTheme).switchHeading}>Tricks</Text>
        <Switch
          trackColor={{
            false: styleProps('toggle.trackColor.off'),
            true: styleProps('toggle.trackColor.on'),
          }}
          thumbColor={
            isTricks
              ? styleProps('toggle.thumbColor.on')
              : styleProps('toggle.thumbColor.off')
          }
          ios_backgroundColor={styleProps('toggle.ios_backgroundColor')}
          onValueChange={toggleTricks}
          value={isTricks}
        />
        <Text style={stylesFor(colorsTheme).switchHeading}>Theme</Text>
        <SettingsMenuTheme />
      </View>
    </View>
  )
}

const styleProps = (pick) => {
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

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      // marginTop: 20,
      flex: 1,
      justifyContent: 'flex-start',
      // borderWidth: 2,
      // borderColor: '#20232a',
      width: '100%',
      flexWrap: 'nowrap',
    },
    containerRow: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // borderWidth: 2,
      // borderColor: '#20232a',
    },
    switchHeading: {
      marginLeft: 20,
      color: colorsTheme.textColor,
    },
  })

export default SettingsToggle
