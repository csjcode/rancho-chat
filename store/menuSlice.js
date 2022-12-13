import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    storedMenu: {
      map: true,
      tricks: true,
      themeColorsName: 'dark',
    },
  },
  reducers: {
    setStoredMenu: (state, action) => {
      // console.log(`action ${JSON.stringify(action)}`)
      const newMenu = action.payload
      state.storedMenu = newMenu
    },
  },
})
export const setStoredMenu = menuSlice.actions.setStoredMenu
export default menuSlice.reducer
