import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import getColors from "../../constants/colors/getColors";
import { setStoredMenu } from "../../store/menuSlice";
import { RootState } from "../../store/store";
import { ThemeColors } from "../../constants/types/types";

const SettingsMenuTheme = (props: any) => {
  const dispatch = useDispatch();
  const colorsTheme = getColors();
  const menuData = useSelector((state: RootState) => state.menu.storedMenu);
  // const colorsTheme = getColors()

  const [themeColorsName, themeColorsNameSet] = useState<ThemeColors>(
    menuData.themeColorsName
  );

  const changeThemeColor = (themeColorsName: ThemeColors) => {
    // console.log(`changeThemeColor current ${themeColorsName}`)

    const newColor =
      themeColorsName === ThemeColors.LIGHT
        ? ThemeColors.DARK
        : ThemeColors.LIGHT;

    // console.log(`newColor  ${newColor}`)

    themeColorsNameSet((previousState: ThemeColors) => newColor);

    dispatch(setStoredMenu({ ...menuData, themeColorsName: newColor }));
  };
  // console.log(props)
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => changeThemeColor(themeColorsName)}
    >
      {/* <Text style={{ color: 'red' }}>{themeColorsName}</Text> */}
      <Ionicons
        name={
          menuData.themeColorsName === "light"
            ? "moon-outline"
            : "sunny-outline"
        }
        size={25}
        color={menuData.themeColorsName === "light" ? "black" : "green"}
      />
    </TouchableOpacity>
  );
};

export default SettingsMenuTheme;

const styles = StyleSheet.create({});
