import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType, UserType } from '../../../types';
import {
  userCheckThunk,
  userLoginThunk,
  userLogoutThunk,
  userSignUpThunk,
  userUpdateThunk,
} from '../../thunkActions/userThunkActions';

const initialState: UserStateType = {
  status: 'pending',
  data: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.status = 'guest';
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userCheckThunk.fulfilled, (state, action: PayloadAction<UserType>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(userCheckThunk.rejected, (state) => {
      state.status = 'guest';
      state.data = undefined;
    });

    builder.addCase(userSignUpThunk.fulfilled, (state, action: PayloadAction<UserType>) => {
      state.status = 'success';
      state.data = action.payload;
    });

    builder.addCase(userLoginThunk.fulfilled, (state, action: PayloadAction<UserType>) => {
      state.status = 'success';
      state.data = action.payload;
    });

    builder.addCase(userCheckThunk.pending, (state) => {
      state.status = 'pending';
      state.data = undefined;
    });
    builder.addCase(userLogoutThunk.fulfilled, (state) => {
      state.status = 'guest';
      state.data = undefined;
    });

    builder.addCase(userUpdateThunk.fulfilled, (state, action: PayloadAction<UserType>) => {
      state.status = 'success';
      state.data = action.payload;
    });

  },
});

export default userSlice.reducer;
export const { removeUser } = userSlice.actions;
