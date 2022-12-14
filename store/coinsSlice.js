import { createSlice } from '@reduxjs/toolkit'

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    storedCoins: {
      coins: ['solana', 'chainlink', 'stepn', 'audius', 'msol'],
    },
  },
  reducers: {
    setStoredCoins: (state, action) => {
      // console.log(`action ${JSON.stringify(action)}`)
      const newCoins = action.payload
      state.storedCoins = newCoins
    },
  },
})
export const setStoredCoins = coinsSlice.actions.setStoredCoins
export default coinsSlice.reducer
