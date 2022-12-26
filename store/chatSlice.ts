import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ChatsState {
  chatsData: { [key: string]: any };
}

const initialState: ChatsState = {
  chatsData: {},
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChatsData: (state, action: PayloadAction<ChatsState>) => {
      state.chatsData = { ...action.payload.chatsData };
    },
  },
});

export const { setChatsData } = chatSlice.actions;
export default chatSlice.reducer;
