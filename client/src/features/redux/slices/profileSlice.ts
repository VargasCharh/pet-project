import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../types';
import getAllTopThunk from '../../thunkActions/profileThunkActions';

export type InitialState = {
  data: UserType[]
}
const initialState: InitialState = {
  data: [],
}

const profileSlice = createSlice({
  name: 'topPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTopThunk.fulfilled, (state, action: PayloadAction<UserType[]>) => {
      state.data = action.payload;
    });
  },
});

export default profileSlice.reducer;
