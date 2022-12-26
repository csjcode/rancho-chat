import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoredUsers {
  [key: string]: {};
}

interface SetStoredUsersAction {
  newUsers: { [userId: string]: UserData | any };
  type: string;
  payload: {
    newUsers: {
      [key: string]: any;
    };
  };
}

interface UserSliceState {
  storedUsers: StoredUsers;
}

type UserData = {
  userId: string;
  name: string;
  age: number;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    storedUsers: {},
  } as UserSliceState,
  reducers: {
    setStoredUsers(state, action: PayloadAction<SetStoredUsersAction>) {
      const newUsers = action.payload.newUsers;
      const existingUsers: any = state.storedUsers;

      const usersArray = Object.values(newUsers);
      for (let i = 0; i < usersArray.length; i++) {
        const userData = usersArray[i];
        existingUsers[userData.userId] = userData;
      }

      state.storedUsers = existingUsers;
    },
  },
});

export const { setStoredUsers } = userSlice.actions;
export default userSlice.reducer;

/*
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    storedUsers: {},
  },
  reducers: {
    setStoredUsers: (state, action) => {
      const newUsers = action.payload.newUsers
      const existingUsers = state.storedUsers

      const usersArray = Object.values(newUsers)
      for (let i = 0; i < usersArray.length; i++) {
        const userData = usersArray[i]
        existingUsers[userData.userId] = userData
      }

      state.storedUsers = existingUsers
    },
  },
})
export const setStoredUsers = userSlice.actions.setStoredUsers
export default userSlice.reducer

*/
