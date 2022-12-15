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
      console.log(`action ${JSON.stringify(action)}`)
      const newCoins = action.payload
      state.storedCoins = newCoins
    },
    removeStoredCoin: (state, action) => {
      // {"type":"coins/removeStoredCoin","payload":{"coins":["solana","chainlink","stepn","audius","msol"],"removeCoin":"audius"}}
      console.log(`removeStoredCoin ${JSON.stringify(action)}`)
      const newCoins = action.payload.coins.filter(
        (item) => item !== action.payload.removeCoin,
      )
      // console.log(`action ${JSON.stringify(action)}`)
      // const newCoins = state.storedCoins.coins.pop(action.payload)
      state.storedCoins.coins = newCoins
    },
    addStoredTokenList: (state, action) => {
      console.log(`action ${JSON.stringify(action.payload)}`)
      const newCoins = Array.from(
        new Set([
          ...action.payload.coins,
          ...action.payload.addTokenListStored,
        ]),
      )
      console.log(`newCoins ${newCoins}`)
      state.storedCoins.coins = newCoins
    },
  },
})
export const setStoredCoins = coinsSlice.actions.setStoredCoins
export const removeStoredCoin = coinsSlice.actions.removeStoredCoin
export const addStoredTokenList = coinsSlice.actions.addStoredTokenList
export default coinsSlice.reducer
