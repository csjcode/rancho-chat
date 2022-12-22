import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  userData: object | null;
  didTryAutoLogin: boolean;
}

const initialState: AuthState = {
  token: null,
  userData: null,
  didTryAutoLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
    didTryAutoLogin: false,
  } as AuthState,
  reducers: {
    authenticate: (
      state,
      action: PayloadAction<{ token: string; userData: object }>
    ) => {
      const { payload } = action;
      state.token = payload.token;
      state.userData = payload.userData;
      state.didTryAutoLogin = true;
    },
    setDidTryAutoLogin: (state, action) => {
      state.didTryAutoLogin = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.userData = null;
      state.didTryAutoLogin = false;
    },
    updateLoggedInUserData: (
      state,
      action: PayloadAction<{ newData: object }>
    ) => {
      state.userData = { ...state.userData, ...action.payload.newData };
    },
  },
});

export const setDidTryAutoLogin = authSlice.actions.setDidTryAutoLogin;
export const authenticate = authSlice.actions.authenticate;
export const updateLoggedInUserData = authSlice.actions.updateLoggedInUserData;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
