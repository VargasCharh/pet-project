import React, { useEffect, useState } from 'react';
import 'flowbite';
import type { WsFormType } from '../../../types';
import useWsHook from '../../../hooks/useWsHook';
import { useAppSelector } from '../../../features/redux/reduxHooks';

type OneUserChatProp = {
  nameUser: string;
  messageUser: string;
  avatar: string;
  userId: number;
};

export default function OneUserChat({
  nameUser,
  messageUser,
  avatar,
  userId,
}: OneUserChatProp): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const [timestamp, setTimestamp] = useState('');

  const getCurrentTime = (): string => {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    setTimestamp(getCurrentTime()); // Set the initial timestamp
  }, []);

  return (
    <div
      id="toast-notification"
      className={`w-1/2 max-w-xs p-2 text-gray-900 ${
        userId === user.data?.id
          ? 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 ml-auto'
          : 'bg-gradient-to-r from-red-300 via-red-300 to-yellow-100 mr-auto'
      } rounded-lg shadow dark:bg-dark-blue dark:text-gray-300 overflow-wrap mt-4`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/img/----7.jpg"
            alt="Jese Leos image"
            // avatar
          />
          <span className="sr-only">Message icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">{nameUser}</div>
          <div className="text-sm font-normal text-white">{messageUser}</div>
        </div>
      </div>
      <div className=" text-[13px] font-normal text-white ml-[84%] mt-[-4%]">{timestamp}</div>
    </div>
  );
}
