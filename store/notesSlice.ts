import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoredNotes {
  notes: {
    id: string;
    type: string;
    title: string;
    message: string;
    geoLatLong: string;
    geoLatLongTarget: string;
    dateTimeTarget: string;
    timestamp: number;
    dateTime: string;
  }[];
}

interface SubmitNoteData {
  id: string;
  type: string;
  title: string;
  message: string;
  geoLatLong: string;
  geoLatLongTarget: string;
  dateTimeTarget: string;
  timestamp: number;
  dateTime: string;
}

interface RemoveNoteId {
  removeNoteId: string;
}

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    storedNotes: {
      notes: [
        {
          id: "11edc52b-3915-4d71-1058-f8885e29d894",
          type: "todo",
          title: "Get groceries",
          message: "I need to get pasta, milk, eggs",
          geoLatLong: "20.972382846870747, -89.62264760811169",
          geoLatLongTarget: "",
          dateTimeTarget: "",
          timestamp: 1671215685121,
          dateTime: "2022-12-15T18:35:28.284",
        },
        {
          id: "11edc52b-2918-4d71-9011-a5285e29d733",
          type: "todo",
          title: "Get drinks",
          message: "Pick up soda, beer, water",
          geoLatLong: "20.972382846870747, -89.62264760811169",
          geoLatLongTarget: "",
          dateTimeTarget: "",
          timestamp: 1671215695120,
          dateTime: "2022-12-16T18:35:28.284",
        },
      ],
    } as StoredNotes,
  },
  reducers: {
    setStoredNotes: (state, action: PayloadAction<StoredNotes>) => {
      console.log(`action ${JSON.stringify(action)}`);
      const newnotes = action.payload;
      state.storedNotes = newnotes;
    },
    removeStoredNote: (state, action: PayloadAction<RemoveNoteId>) => {
      const newNotesAfterRemovedId = state.storedNotes.notes.filter(
        (note) => note.id !== action.payload.removeNoteId
      );

      state.storedNotes.notes = newNotesAfterRemovedId;
    },
    setStoredNote: (
      state,
      action: PayloadAction<{ submitNoteData: SubmitNoteData }>
    ) => {
      const newNotesList = [
        ...state.storedNotes.notes,
        action.payload.submitNoteData,
      ];

      newNotesList.sort((a, b) => b.timestamp - a.timestamp);

      state.storedNotes.notes = newNotesList;

      // await setNotesAsyncStorageObj('notesList', newNotesList)
    },
  },
});
export const { setStoredNotes, removeStoredNote, setStoredNote } =
  notesSlice.actions;
export default notesSlice.reducer;

/*

import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    storedNotes: {
      notes: [
        {
          id: '11edc52b-3915-4d71-1058-f8885e29d894',
          type: 'todo',
          title: 'Get groceries',
          message: 'I need to get pasta, milk, eggs',
          geoLatLong: '20.972382846870747, -89.62264760811169',
          geoLatLongTarget: '',
          dateTimeTarget: '',
          timestamp: 1671215685121,
          dateTime: '2022-12-15T18:35:28.284',
        },
        {
          id: '11edc52b-2918-4d71-9011-a5285e29d733',
          type: 'todo',
          title: 'Get drinks',
          message: 'Pick up soda, beer, water',
          geoLatLong: '20.972382846870747, -89.62264760811169',
          geoLatLongTarget: '',
          dateTimeTarget: '',
          timestamp: 1671215695120,
          dateTime: '2022-12-16T18:35:28.284',
        },
      ],
    },
  },
  reducers: {
    setStoredNotes: (state, action) => {
      console.log(`action ${JSON.stringify(action)}`)
      const newnotes = action.payload
      state.storedNotes = newnotes
    },
    removeStoredNote: (state, action) => {
      const newNotesAfterRemovedId = state.storedNotes.notes.filter(
        (note) => note.id !== action.payload.removeNoteId,
      )

      state.storedNotes.notes = newNotesAfterRemovedId
    },
    setStoredNote: (state, action) => {
      const newNotesList = [
        ...state.storedNotes.notes,
        action.payload.submitNoteData,
      ]

      newNotesList.sort((a, b) => b.timestamp - a.timestamp)

      state.storedNotes.notes = newNotesList

      // await setNotesAsyncStorageObj('notesList', newNotesList)
    },
  },
})
export const setStoredNotes = notesSlice.actions.setStoredNotes
export const removeStoredNote = notesSlice.actions.removeStoredNote
export const setStoredNote = notesSlice.actions.setStoredNote
export default notesSlice.reducer

*/
