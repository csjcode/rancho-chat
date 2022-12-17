import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import getColors from '../../constants/colors/getColors'
const colorsTheme = getColors()

const TrickScreen = (props) => {
  // console.log('trick screen')
  const colorsTheme = getColors()
  return (
    <View style={stylesFor(colorsTheme).container}>
      <FlatList
        style={{ width: 300 }}
        data={itemData}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
          return <Item item={item} navigation={props.navigation} />
        }}
        keyExtractor={(item, key) => key}
      />
    </View>
  )
}

const Item = ({ item, navigation }) => {
  var colorsTheme = getColors()
  return item.label ? (
    <View style={stylesFor(colorsTheme).item}>
      <TouchableOpacity
        onPress={() => {
          return item.screen ? navigation.navigate(item.screen) : null
        }}
        style={stylesFor(colorsTheme).button}
      >
        {item.icon}
      </TouchableOpacity>
      <Text style={stylesFor(colorsTheme).label}>{item.label}</Text>
    </View>
  ) : (
    <View style={stylesFor(colorsTheme).item}>{item.icon}</View>
  )
}

const itemData = [
  {
    label: 'Map',
    screen: 'Map',
    icon: (
      <FontAwesome name="map-o" size={45} color={colorsTheme.trickScreenIcon} />
    ),
  },
  {
    label: 'Crypto',
    screen: 'TokenScreen',
    icon: (
      <FontAwesome
        name="bitcoin"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  // {
  //   label: 'Steps',
  //   screen: 'StepsScreen',
  //   icon: <Ionicons name="walk" size={45} color={colorsTheme.trickScreenIcon} />,
  // },
  {
    label: 'Video',
    screen: 'TestingScreen',
    icon: (
      <MaterialIcons
        name="video-call"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Audio Chat',
    screen: 'Map',
    icon: (
      <Ionicons
        name="md-call-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Screen Capture',
    screen: 'Map',
    icon: (
      <MaterialCommunityIcons
        name="cellphone-screenshot"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Notes',
    screen: 'NotesScreen',
    icon: (
      <Entypo
        name="add-to-list"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool7',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool8',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool9',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool10',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool11',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool12',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool13',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
  {
    label: 'Tool14',
    screen: 'Map',
    icon: (
      <Ionicons
        name="settings-outline"
        size={45}
        color={colorsTheme.trickScreenIcon}
      />
    ),
  },
]

const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: colorsTheme.trickScreenBackground,
      width: '100%',
      borderTopColor: '#333',
      borderWidth: 1,
    },
    cell: {
      fontSize: 20,
    },
    item: {
      // flex: 1,
      maxWidth: '25%',
      alignItems: 'center',
      padding: 10,
      borderColor: '#999',
    },
    label: {
      color: colorsTheme.trickScreenIconLabel,
    },
  })

export default TrickScreen
