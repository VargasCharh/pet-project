import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserLoginType, UserSingUpType, UserType, UserUpdateType } from '../../types';
import { checkUser, loginUser, logoutUser, signUpUser, updateUser } from '../../services';

export const userCheckThunk = createAsyncThunk<UserType>('user/check', async () =>
  checkUser()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const userSignUpThunk = createAsyncThunk<UserType, UserSingUpType>(
  'user/signup',
  async (data) =>
    signUpUser(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const userLoginThunk = createAsyncThunk<UserType, UserLoginType>(
  'user/signin',
  async (data) =>
    loginUser(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const userLogoutThunk = createAsyncThunk<UserType>('user/logout', async () =>
  logoutUser()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const userUpdateThunk = createAsyncThunk<UserType, UserUpdateType>(
  'user/update',
  async ({ id, data }) =>
    updateUser(data, id)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);
