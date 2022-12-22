import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoredMenu {
  map: boolean;
  tricks: boolean;
  themeColorsName: string;
}

interface MenuState {
  storedMenu: StoredMenu;
}

const initialState: MenuState = {
  storedMenu: {
    map: true,
    tricks: true,
    themeColorsName: "dark",
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setStoredMenu: (state, action: PayloadAction<StoredMenu>) => {
      // console.log(`action ${JSON.stringify(action)}`)
      const newMenu = action.payload;
      state.storedMenu = newMenu;
    },
  },
});
export const setStoredMenu = menuSlice.actions.setStoredMenu;
export default menuSlice.reducer;

/*


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

*/
