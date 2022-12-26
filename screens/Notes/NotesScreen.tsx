import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import NoteEdit from "./NoteEdit";
import NotesListContainer from "./NotesListContainer";
import getColors from "../../constants/colors/getColors";
import { stylesFor } from "./styles/NotesScreenStyle";

interface Props {
  [key: string]: any;
}

const NotesScreen = (props: Props) => {
  const colorsTheme = getColors();
  const [addNoteVisible, addNoteVisibleSet] = useState<boolean>(false);
  const [listNotesVisible, listNotesVisibleSet] = useState<boolean>(true);

  return (
    <View style={stylesFor(colorsTheme).container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            addNoteVisibleSet(!addNoteVisible);
            listNotesVisibleSet(!listNotesVisible);
          }}
        >
          <Text style={stylesFor(colorsTheme).textStart}>
            {!addNoteVisible ? "+ Add Note" : "< Notes"}
          </Text>
        </TouchableOpacity>
      </View>

      {listNotesVisible && !addNoteVisible && (
        <View>
          <NotesListContainer />
        </View>
      )}

      {addNoteVisible && (
        <View>
          <NoteEdit
            addNoteVisible={addNoteVisible}
            addNoteVisibleSet={addNoteVisibleSet}
            listNotesVisibleSet={listNotesVisibleSet}
          />
        </View>
      )}
    </View>
  );
};

export default NotesScreen;
