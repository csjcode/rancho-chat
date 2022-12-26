
import { createSlice } from '@reduxjs/toolkit';

interface StoredCoinsState {
  storedCoins: {
    coins: string[];
  };
}

interface SetStoredCoinsAction {
  payload: StoredCoinsState['storedCoins'];
}

interface RemoveStoredCoinAction {
  payload: {
    coins: string[];
    removeCoin: string;
  };
}

interface AddStoredTokenListAction {
  payload: {
    coins: string[];
    addTokenListStored: string[];
  };
}

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    storedCoins: {
      coins: ['solana', 'chainlink', 'stepn', 'audius', 'msol'],
    },
  },
  reducers: {
    setStoredCoins: (state, action: SetStoredCoinsAction) => {
      console.log(`action ${JSON.stringify(action)}`);
      const { payload } = action;
      state.storedCoins = payload;
    },
    removeStoredCoin: (state, action: RemoveStoredCoinAction) => {
      console.log(`removeStoredCoin ${JSON.stringify(action)}`);
      const { payload } = action;
      const { coins, removeCoin } = payload;
      const newCoins = coins.filter((item) => item !== removeCoin);
      state.storedCoins.coins = newCoins;
    },
    addStoredTokenList: (state, action: AddStoredTokenListAction) => {
      console.log(`action ${JSON.stringify(action.payload)}`);
      const { payload } = action;
      const { coins, addTokenListStored } = payload;
      const newCoins = Array.from(
        new Set([...coins, ...addTokenListStored]),
      );
      console.log(`newCoins ${newCoins}`);
      state.storedCoins.coins = newCoins;
    },
  },
});
export const setStoredCoins = coinsSlice.actions.setStoredCoins
export const removeStoredCoin = coinsSlice.actions.removeStoredCoin
export const addStoredTokenList = coinsSlice.actions.addStoredTokenList
export default coinsSlice.reducer
