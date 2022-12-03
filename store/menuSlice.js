import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    storedMenu: {
      map: true,
      tricks: true,
    },
  },
  reducers: {
    setStoredMenuTest: () => {
      return console.log(`works`)
    },
    setStoredMenu: (state, action) => {
      return console.log(`action ${JSON.stringify(action)}`)
      // const newMenu = action.payload.newMenu
      // const existingUsers = state.storedMenu

      // const menuArray = Object.values(newMenu)
      // for (let i = 0; i < menuArray.length; i++) {
      //   const menuData = menuArray[i]
      //   existingMenu[menuData.menuId] = userData
      // }

      // state.storedMenu = existingMenu
    },
  },
})
export const setStoredMenuTest = menuSlice.actions.setStoredMenuTest
export const setStoredMenu = menuSlice.actions.setStoredMenu
export default menuSlice.reducer
