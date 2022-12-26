import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import NoteCardsList from "./NoteCardsList";
import React from "react";
import getColors from "../../constants/colors/getColors";
import { RootState } from "../../store/store";

const NotesListContainer = () => {
  const colorsTheme = stylesFor(getColors());
  const storedNotes = useSelector(
    (state: RootState) => state.notes.storedNotes.notes
  );

  return (
    <View style={colorsTheme.containerListNotes}>
      <Text style={colorsTheme.textStart}>Notes</Text>
      <NoteCardsList dataSample={storedNotes} />
    </View>
  );
};

const stylesFor = (colorsTheme: any) =>
  StyleSheet.create({
    containerListNotes: {
      marginTop: 10,
      marginBottom: 10,
    },
    textStart: {
      color: colorsTheme.textColor,
      // width: '50%',
    },
  });

export default NotesListContainer;
