import React from 'react';

import 'flowbite';
import QuestionModal from './QuestionModal';

export default function Menu(): JSX.Element {
  return (
    <>
      {/* <script src="../path/to/flowbite/dist/flowbite.min.js" /> */}
      <ul className="w-full mx-5 text-sm my-5 font-medium text-gray-300 bg-gray-800 border border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white">
        <ul className="space-y-2 font-medium">
          
          <li className="text-center">
            <button
              type="button"
              className="flex items-center w-full p-2 border text-gray-900 transition duration-100 rounded-lg group hover:text-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              
              <svg
                className="w-6 h-6  text-gray-200 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                />
              </svg>

              <span
                className="text-gray-200 flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                Игры
              </span>
              

              <svg
                sidebar-toggle-item="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-gray-200"
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <ul id="dropdown-example" className="hidden">
              <li>
                <a
                  href="/practice"
                  className="flex items-center w-full p-2  text-gray-200  transition duration-75 rounded-lg px-10 group hover:text-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 "
                >
                  Практика
                </a>
                <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700" />
              </li>
              <li>
                <a
                  href="/choose"
                  className="flex items-center w-full text-gray-200  transition duration-75 rounded-lg px-10 group hover:text-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                >
                  Теория (Quiz)
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700" />
        <a
          href="/forum"
          type="button"
          className="w-full px-32 py-2 border-b border-gray-400 dark:border-gray-600 text-center"
        >
          Форум
        </a>

        <a
          href="/chat"
          type="button"
          className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600 text-center"
        >
          Чат
        </a>
        <QuestionModal />
      </ul>
    </>
  );
}
