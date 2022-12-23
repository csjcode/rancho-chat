import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import NoteCard from "./NoteCard";
import getColors from "../../constants/colors/getColors";

const colorsTheme = getColors();

const NoteCardsList = ({ dataSample }: any) => {
  return dataSample.map((item: any) => {
    const listKey = `${item.id}${item.title.slice(0, 10)}`;
    return <NoteCard key={listKey} item={item} />;
  });
};

export default NoteCardsList;
