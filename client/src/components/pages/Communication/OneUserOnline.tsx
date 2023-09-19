import React from 'react';
import type { UserType } from '../../../types';

type OneUserOnlineProp = {
  user: UserType;
};
export default function OneUserOnline({ user }: OneUserOnlineProp): JSX.Element {
  return (
    <div
      id="toast-notification"
      className="max-w-xs h-14 p-2 text-gray-900 bg-white rounded-lg shadow dark:bg-dark-blue dark:text-gray-300 overflow-hidden"
      style={{ marginTop: '10px' }}
    >
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          <img className="w-7 h-7 rounded-full" src="/img/----7.jpg" alt="Jese Leos image" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <div className="text-[11px] font-semibold text-gray-900 dark:text-white overflow-hidden">
            {user.name}
          </div>
          <div className="text-[11px] font-normal overflow-hidden">online</div>
        </div>
      </div>
    </div>
  );
}
