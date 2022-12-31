import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import colors from "../constants/colors/colors";
import getColors from "../constants/colors/getColors";
const colorsTheme = getColors();

const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      data-testid="CustomHeaderButton"
      style={{}}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color ?? colorsTheme.blue}
    />
  );
};

export default CustomHeaderButton;
