import type React from 'react';
import type { UserLoginType, UserSingUpType } from '../types';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { userLoginThunk, userSignUpThunk } from '../features/thunkActions';

export type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export type AuthHookReturnedType = {
  signUpHandler: SubmitHandler;
  loginHandler: SubmitHandler;
};

export default function useFormHook(): AuthHookReturnedType {
  const dispatch = useAppDispatch();

  const signUpHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSingUpType;
    void dispatch(userSignUpThunk(formData));
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserLoginType;
    void dispatch(userLoginThunk(formData));
  };

  return { signUpHandler, loginHandler };
}
