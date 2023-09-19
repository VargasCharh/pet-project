import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../features/redux/reduxHooks';
import OneUserOnline from './OneUserOnline';

export default function UsersOnline(): JSX.Element {
  const users = useAppSelector((state) => state.ws.users);

  return (
    <div>
      {users.map((el) => (
        <OneUserOnline key={el.id} user={el} />
      ))}
    </div>
  );
}
