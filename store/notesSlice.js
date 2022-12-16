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
          date: 1671215685121,
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
          date: 1671215695120,
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
      // console.log(`actions ${action}`)
      // console.log(
      //   `removeStoredNote ${JSON.stringify(action.payload.removeNoteId)}`,
      // )
      // console.log(
      //   `state.storedNotes.notes ${JSON.stringify(state.storedNotes.notes)}`,
      // )

      const newNotesAfterRemovedId = state.storedNotes.notes.filter(
        (note) => note.id !== action.payload.removeNoteId,
      )

      // console.log(
      //   `newNotesAfterRemovedId ${JSON.stringify(newNotesAfterRemovedId)}`,
      // )

      state.storedNotes.notes = newNotesAfterRemovedId

      // const newnotes = action.payload.notes.filter(
      //   (item) => item !== action.payload.removenote,
      // )
      // state.storedNotes.notes = newnotes
    },
    addStoredNoteList: (state, action) => {
      console.log(`action ${JSON.stringify(action.payload)}`)
      const newnotes = Array.from(
        new Set([...action.payload.notes, ...action.payload.addNoteListStored]),
      )
      console.log(`newnotes ${newnotes}`)
      state.storedNotes.notes = newnotes
    },
  },
})
export const setStoredNotes = notesSlice.actions.setStoredNotes
export const removeStoredNote = notesSlice.actions.removeStoredNote
export const addStoredTokenList = notesSlice.actions.addStoredNoteList
export default notesSlice.reducer
