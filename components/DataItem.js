import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../constants/colors/colors'
import ProfileImage from './ProfileImage'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import getColors from '../constants/colors/getColors'
const colorsTheme = getColors()

const imageSize = 40

const DataItem = (props) => {
  const { title, subTitle, image, type, isChecked, icon } = props

  const hideImage = props.hideImage && props.hideImage === true

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        {!icon && !hideImage && <ProfileImage uri={image} size={imageSize} />}

        {icon && (
          <View style={styles.leftIconContainer}>
            <AntDesign name={icon} size={20} color={colorsTheme.blue} />
          </View>
        )}

        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.title,
              ...{
                color:
                  type === 'button' ? colorsTheme.blue : colorsTheme.textColor,
              },
            }}
          >
            {title}
          </Text>

          {subTitle && (
            <Text numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </Text>
          )}
        </View>

        {type === 'checkbox' && (
          <View
            style={{
              ...styles.iconContainer,
              ...(isChecked && styles.checkedStyle),
            }}
          >
            <Ionicons name="checkmark" size={18} color="white" />
          </View>
        )}

        {type === 'link' && (
          <View>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color={colorsTheme.grey}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomColor: colorsTheme.extraLightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
    minHeight: 50,
  },
  textContainer: {
    marginLeft: 14,
    flex: 1,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  subTitle: {
    fontFamily: 'regular',
    color: colorsTheme.grey,
    letterSpacing: 0.3,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colorsTheme.lightGrey,
    backgroundColor: 'white',
  },
  checkedStyle: {
    backgroundColor: colorsTheme.primary,
    borderColor: 'transparent',
  },
  leftIconContainer: {
    backgroundColor: colorsTheme.extraLightGrey,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
  },
})

export default DataItem
