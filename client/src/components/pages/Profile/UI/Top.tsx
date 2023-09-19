import React from 'react';
import type { UserType } from '../../../../types';

export type TopProps = {
  user: UserType;
};

export default function Top({ user }: TopProps): JSX.Element {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {user.email === null ? (
                <img className="w-8 h-8 rounded-full" src={user.avatar} alt="????" />
              ) : (
                <img
                  className="w-8 h-8 rounded-full"
                  src={`http://localhost:3001${user.avatar}`}
                  alt="????"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-purple-100 truncate dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-gray-400 truncate dark:text-gray-400">{user.email}</p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-purple-400 dark:text-white">
              {user.score}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
