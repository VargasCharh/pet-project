import type React from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import type { AxiosUserUpdateType, UserType } from '../types';
import { userUpdateThunk } from '../features/thunkActions';

export type SubmitHandler = {
  updateHandler: (e: React.FormEvent<HTMLFormElement>, id: UserType['id']) => void;
};

export default function useProfileUpdateHook(): SubmitHandler {
  const dispatch = useAppDispatch();

  const updateHandler = (e: React.FormEvent<HTMLFormElement>, id: UserType['id']): void => {
    e.preventDefault();
    // const updateData = Object.fromEntries(new FormData(e.currentTarget)) as AxiosUserUpdateType;
    const updateData = new FormData(e.currentTarget)
    console.log(updateData)
    // updateData.append('file', e.currentTarget.file.files[0])
    e.currentTarget.reset();
    void dispatch(userUpdateThunk({ data: updateData, id }));
  };

  return { updateHandler };
}
