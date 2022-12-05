import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TokenPrice from '../../components/TokenPrice'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { FlatList } from 'react-native'

const TrickScreen = () => {
  return (
    <View style={styles.container}>
      {/* <TokenPrice /> */}
      <FlatList
        style={{ width: 300 }}
        data={itemData}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={Item}
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

const Item = ({ item }) => {
  return item.label ? (
    <View style={styles.item}>
      {item.icon}
      <Text>{item.label}</Text>
    </View>
  ) : (
    <View style={styles.item}>{item.icon}</View>
  )
}

// Sample Data
const itemData = [
  {
    label: 'Tool',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool2',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
  {
    label: 'Tool3',
    icon: <Ionicons name="settings-outline" size={50} color={'#999'} />,
  },
]

export default TrickScreen
