import { createSlice } from '@reduxjs/toolkit';
import type { QuestionType } from '../../../types';
import {
  adminDeleteQuestionThunk,
  adminQuestionThunk,
} from '../../thunkActions/userQuestionThunkAction';

export type InitialState = {
  data: QuestionType[];
};
const initialState: InitialState = {
  data: [],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminQuestionThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(adminDeleteQuestionThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
  },
});

export default questionSlice.reducer;
