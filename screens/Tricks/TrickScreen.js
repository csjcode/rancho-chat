import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native'
import getColors from '../../constants/getColors'
const colorsTheme = getColors()

const TrickScreen = (props) => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'stretch',
    backgroundColor: '#fff',
    width: '100%',
  },
  cell: {
    fontSize: 20,
  },
  item: {
    // flex: 1,
    maxWidth: '25%', // 100% devided by the number of rows you want
    alignItems: 'center',

    // my visual styles; not important for the grid
    padding: 10,
    // backgroundColor: '',
    // borderWidth: 0.5,
    borderColor: '#999',
  },
})

const Item = ({ item, navigation }) => {
  return item.label ? (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          return item.screen ? navigation.navigate(item.screen) : null
        }}
        style={styles.button}
      >
        {item.icon}
      </TouchableOpacity>
      <Text>{item.label}</Text>
    </View>
  ) : (
    <View style={styles.item}>{item.icon}</View>
  )
}

// Sample Data
const itemData = [
  {
    label: 'Map',
    screen: 'Map',
    icon: <FontAwesome name="map-o" size={50} color={'#999'} />,
  },
  {
    label: 'Crypto',
    screen: 'TokenScreen',
    icon: <FontAwesome name="bitcoin" size={50} color={'#999'} />,
  },
  // {
  //   label: 'Steps',
  //   screen: 'StepsScreen',
  //   icon: <Ionicons name="walk" size={50} color={'#999'} />,
  // },
  {
    label: 'Video Chat',
    screen: 'Map',
    icon: <MaterialIcons name="video-call" size={50} color={'#999'} />,
  },
  {
    label: 'Audio Chat',
    screen: 'Map',
    icon: <Ionicons name="md-call-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Screen Capture',
    screen: 'Map',
    icon: (
      <MaterialCommunityIcons
        name="cellphone-screenshot"
        size={50}
        color={'#999'}
      />
    ),
  },
  {
    label: 'Tool6',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool7',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool8',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool9',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool10',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool11',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool12',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool13',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool14',
    screen: 'Map',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
]

export default TrickScreen
