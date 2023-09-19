import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, isAction } from "@reduxjs/toolkit";
import type { InitWsType, UserType, WsMessages } from "../../../types";

const initialState: InitWsType = {
  status: false,
  users: [],
  messages: [],
};

const wsSlice = createSlice({
  name: "ws",
  initialState,
  reducers: {
    setWs: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        return { status: false, users: [], messages: [] };
      }
      state.status = true;
    },

    setUsersOnline: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },

    setMessage: (state, action: PayloadAction<WsMessages>) => {
      if (state.messages.length > 8) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export default wsSlice.reducer;
export const { setWs, setUsersOnline, setMessage } = wsSlice.actions;
