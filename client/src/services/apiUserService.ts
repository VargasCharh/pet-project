import type { AxiosUserUpdateType, UserLoginType, UserSingUpType, UserType } from '../types';
import apiInstance from './apiConfig';

export const checkUser = (): Promise<UserType> =>
  apiInstance
    .get<UserType>('/api/auth/check')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const signUpUser = (data: UserSingUpType): Promise<UserType> =>
  apiInstance
    .post<UserType>('/api/auth/signup', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const loginUser = (data: UserLoginType): Promise<UserType> =>
  apiInstance
    .post<UserType>('/api/auth/login', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const logoutUser = (): Promise<UserType> =>
  apiInstance
    .get<UserType>('/api/auth/logout')
    .then((response) => response.data)
    .catch((err) => Promise.reject(err));

export const updateUser = (data: AxiosUserUpdateType, id: UserType['id']): Promise<UserType> =>
  apiInstance
    .patch<UserType>(`/api/profile/${id}`, data)
    .then((responce) => responce.data)
    .catch((error) => Promise.reject(error));
