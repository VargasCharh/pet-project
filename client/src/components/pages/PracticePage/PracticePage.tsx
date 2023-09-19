import React, { useState } from 'react';
import '../../../css/PracticePage.css';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription';
import PracticeSolution from './PracticeSolution';
import 'flowbite';
import ParticlesComponent from './ParticlesComponent';
import { useNavigate } from 'react-router-dom';
import ModalEnd from './ModalEnd';

export default function PracticePage(): JSX.Element {
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  const containerClassName = isFinished
    ? 'border-4 shadow-lg animate-pulse transition duration-500 border-red-500 border-opacity-50 rounded-lg'
    : '';

  return (
    <>
      <ParticlesComponent />
      <div className="flex items-center justify-center h-screen">
        <a
          href="#"
          className={`rounded-md h-5/6 max-w-6xl p-5 bg-[#262626] z-10 ${containerClassName}`}
        >
          <h1 className="text-4xl text-[#e9e9e9] pb-6 pt-2">Задача</h1>
          <div className="max-h-full overflow-auto">
            <Split className="split">
              <ProblemDescription />
              <PracticeSolution />
            </Split>
            <button
              type="submit"
              className="mt-5 px-4 py-2 bg-red-800 text-[#e9e9e9] rounded-md hover:bg-red-900"
            >
              Завершить
            </button>
            <button
              type="submit"
              onClick={()=> navigate('/modalend')}
              className="ml-[874px] px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-900"
            >
              Проверить
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
