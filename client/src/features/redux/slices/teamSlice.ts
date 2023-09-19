import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TeamType } from '../../../types/TeamTypes';
import getAllTeamThunk from '../../thunkActions/teamPageThunkActions';

export type InitialState = {
  data: TeamType[]
}
const initialState: InitialState = {
  data: [],
}

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTeamThunk.fulfilled, (state, action: PayloadAction<TeamType[]>) => {
      state.data = action.payload;
    });
  },
});

export default teamSlice.reducer;
