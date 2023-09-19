import React from 'react';
import OneUserChat from './OneUserChat';
import Message from './Message';
import 'flowbite';
import SearchUser from './SearchUser';
import UserOnline from './UsersOnline';
import type { WsFormType } from '../../../types';
import { useAppSelector } from '../../../features/redux/reduxHooks';

export type ChatUsersProp = {
  submitChatHandler: (e: WsFormType) => void;
};

export default function ChatUsers({ submitChatHandler }: ChatUsersProp): JSX.Element {
  const messages = useAppSelector((state) => state.ws.messages);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="block w-48 h-[620px] mt-[1%] mr-[1%] p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20"
        style={{ overflow: 'auto', position: 'relative' }}
      >
        {/* <SearchUser /> */}
        <h1 className="text-white text-xl font-bold text-center">Пользователи</h1>
        <UserOnline />
      </div>
      <div
        className="block w-5/12 h-[620px] mt-[1%] p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20"
        style={{ overflow: 'auto', position: 'relative' }}
      >
        <div className="h-[400px]">
          {messages.map((el) => (
            <OneUserChat
              key={el.id}
              nameUser={el.user.name}
              messageUser={el.message}
              avatar={el.user.avatar}
              userId={Number(el.user.id)}
            />
          ))}
        </div>
        <Message submitChatHandler={submitChatHandler} />
      </div>
    </div>
  );
}
