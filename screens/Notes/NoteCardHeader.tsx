import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { addStoredNoteList, removeStoredNote } from "../../store/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

// import ConfirmAlert from '../../components/ConfirmAlert'
import { FontAwesome } from "@expo/vector-icons";
import getColors from "../../constants/colors/getColors";
import { stylesFor } from "./styles/NoteCardHeaderStyle";

const colorsTheme = getColors();

interface NoteCardHeaderProps {
  item: {
    id: string;
    title: string;
  };
  messageCardVisible: any;
  messageCardVisibleSet: any;
  key: any;
}

const NoteCardHeader = (props: NoteCardHeaderProps) => {
  const { id, title } = props.item;
  const dispatch = useDispatch();
  const storedNotes = useSelector(
    (state: RootState) => state.notes.storedNotes.notes
  );
  const { messageCardVisible, messageCardVisibleSet, key } = props;

  const handleConfirmRemoveNote = (removeNoteId: string): any => {
    const removedNote = storedNotes.filter(
      (note: any) => note.id === removeNoteId
    );
    let title = `Remove note (Permanently)`;
    let message = `Do you want to remove "${removedNote[0].title}"?`;
    return Alert.alert(title, message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log(`OK Pressed for ${removeNoteId}`);
          dispatch(removeStoredNote({ removeNoteId }));
        },
      },
    ]);
  };

  return (
    <View style={stylesFor(colorsTheme).container} key={key}>
      <View style={stylesFor(colorsTheme).bodyView} key={key}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => messageCardVisibleSet(!messageCardVisible)}
            style={stylesFor(colorsTheme).caretRightTouchable}
          >
            <FontAwesome
              name={messageCardVisible ? "caret-down" : "caret-right"}
              size={20}
              color="#28a870"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10 }}>
          <TouchableOpacity
            onPress={() => messageCardVisibleSet(!messageCardVisible)}
          >
            <Text key={key} style={stylesFor(colorsTheme).titleText}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => handleConfirmRemoveNote(id)}
            style={stylesFor(colorsTheme).removeTouchable}
          >
            <FontAwesome name="remove" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// const stylesFor = (colorsTheme) => StyleSheet.create({})

export default NoteCardHeader;
