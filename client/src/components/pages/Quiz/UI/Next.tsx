import React from 'react';
import type { AnswerType } from '../../../../types/QuestionTypes';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { setNextQuestion, setQuizEnd } from '../../../../features/redux/slices/theoryQuizSlice';

type NextProps = {
  answer: AnswerType | null;
  index: number;
  numberOfQuestions: number;
};

export default function Next({ answer, index, numberOfQuestions }: NextProps): JSX.Element {
  const dispatch = useAppDispatch();
  if (answer === null) return null;
  if (index < numberOfQuestions - 1)
    return (
      // <button
      //   type="button"
      //   onClick={() => dispatch(setNextQuestion())}
      //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      // >
      //   Next
      // </button>

      <button
        style={{ height: '50px', width: "200px"}}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        onClick={() => void dispatch(setNextQuestion())}
        type="button"
      >
        Следующий вопрос
      </button>
    );

  return (
    // <button
    //   type="button"
    //   onClick={() => dispatch(setQuizEnd())}
    //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    // >
    //   Finish
    // </button>

    <button
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      onClick={() => dispatch(setQuizEnd())}
      type="button"
    >
      {/* <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> */}
      Завершить
      {/* </span> */}
    </button>
  );
}
