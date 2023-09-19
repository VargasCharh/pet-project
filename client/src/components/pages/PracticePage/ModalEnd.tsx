import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from '../../../hooks/useWindow';
import '../../../css/index.css';

export default function ModalEnd(): JSX.Element {
  const { width, height } = useWindowSize();

  return (
    <div className="flex justify-center items-center h-screen">
      <Confetti width={width} height={height} gravity={0.3} tweenDuration={6000} />
      <div className="flex flex-col items-center justify-center  h-2/4 max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src="/img/anton.jpg" alt="result" className="h-2/4" />
        <h2 className="mb-2 text-4xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
          Может это не твое?
        </h2>
    
        <a
          href="/profile"
          className="inline-flex items-center text-red-500 hover:underline text-xl p-5"
        >
          Вернуться в профиль
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
