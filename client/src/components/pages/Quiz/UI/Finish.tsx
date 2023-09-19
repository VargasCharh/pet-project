import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { getTheoryQuestionThunk } from '../../../../features/thunkActions/theoryQuizThunkAction';

export default function Finish(): JSX.Element {
  const { companyId } = useParams();
  const dispatch = useAppDispatch();
  const restartHandler = (companyId) => {
    if (companyId) {
      void dispatch(getTheoryQuestionThunk(companyId));
    }
  };
  return (
    <>
      <h2 className=" my-4 relative py-2 transition-all ease-in px-10 text-zinc-200 border border-gray-200 duration-75 rounded-md group-hover:bg-opacity-0">
        Время вышло 🙃
      </h2>
      <button
        style={{ height: '50px', top: '10px', width: '200px' }}
        type="button"
        onClick={() => restartHandler(companyId)}
        className="relative inline-flex items-center justify-center text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        Пройти заново
      </button>
    </>
  );
}
