import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import colors from "../constants/colors/colors";
import ProfileImage from "./ProfileImage";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import getColors from "../constants/colors/getColors";

const colorsTheme = getColors();

export interface DataItemProps {
  title: string;
  subTitle?: string;
  image?: string;
  type?: string;
  isChecked?: boolean;
  icon?: string;
  hideImage?: boolean;
  onPress: any | (() => void);
}

const imageSize = 40;

const DataItem = (props: DataItemProps) => {
  const { title, subTitle, image, type, isChecked, icon } = props;

  const hideImage = props.hideImage && props.hideImage === true;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={stylesFor(colorsTheme).container}>
        {!icon && !hideImage && <ProfileImage uri={image} size={imageSize} />}

        {icon && (
          <View style={stylesFor(colorsTheme).leftIconContainer}>
            <AntDesign name={icon} size={20} color={colorsTheme.blue} />
          </View>
        )}

        <View style={stylesFor(colorsTheme).textContainer}>
          <Text
            numberOfLines={1}
            style={{
              ...stylesFor(colorsTheme).title,
              ...{
                color:
                  type === "button" ? colorsTheme.blue : colorsTheme.textColor,
              },
            }}
          >
            {title}
          </Text>

          {subTitle && (
            <Text numberOfLines={1} style={stylesFor(colorsTheme).subTitle}>
              {subTitle}
            </Text>
          )}
        </View>

        {type === "checkbox" && (
          <View
            style={{
              ...stylesFor(colorsTheme).iconContainer,
              ...(isChecked && stylesFor(colorsTheme).checkedStyle),
            }}
          >
            <Ionicons name="checkmark" size={18} color="white" />
          </View>
        )}

        {type === "link" && (
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
  );
};

const stylesFor = (colorsTheme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 7,
      borderBottomColor: colorsTheme.extraLightGrey,
      borderBottomWidth: 1,
      alignItems: "center",
      minHeight: 50,
    },
    textContainer: {
      marginLeft: 14,
      flex: 1,
    },
    title: {
      fontFamily: "medium",
      fontSize: 16,
      letterSpacing: 0.3,
    },
    subTitle: {
      fontFamily: "regular",
      color: colorsTheme.grey,
      letterSpacing: 0.3,
    },
    iconContainer: {
      borderWidth: 1,
      borderRadius: 50,
      borderColor: colorsTheme.lightGrey,
      backgroundColor: "white",
    },
    checkedStyle: {
      backgroundColor: colorsTheme.primary,
      borderColor: "transparent",
    },
    leftIconContainer: {
      backgroundColor: colorsTheme.extraLightGrey,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: imageSize,
      height: imageSize,
    },
  });

export default DataItem;
