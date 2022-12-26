import React, { useState } from "react";
import { Appearance } from "react-native";
import colorsDark from "./colorsDark";
import colorsLight from "./colorsLight";
import { store } from "../../store/store";
import { resolveObjKey } from "../../utils/helpers";
import { ThemeColors } from "../types/types";

const getColors = (themeColors?: ThemeColors | null | undefined) => {
  // console.log(store.getState().menu.storedMenu.themeColorsName)

  const themeColorsName = store.getState().menu.storedMenu.themeColorsName;

  // store.dispatch({})
  // console.log(themeColorsName)

  if (themeColorsName === "light") {
    return colorsLight();
  } else {
    return colorsDark();
  }
};

export default getColors;
