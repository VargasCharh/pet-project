import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../features/redux/reduxHooks';
import OneQuestionToAdmin from './OneQuestionToAdmin';
import { adminQuestionThunk } from '../../../../features/thunkActions/userQuestionThunkAction';

export default function QuestionToAdmin(): JSX.Element {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.question);

  useEffect(() => {
    void dispatch(adminQuestionThunk());
  }, []);

  console.log(questions);
  return (
    <div className="w-full max-w-md mt-5 mb-5 p-4 bg-gray-800 border border-gray-400 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-x font-bold leading-none text-white dark:text-white">
          Вопросы от пользователя
        </h5>
      </div>
      <div className="flex flex-col">
        {questions.data.map((el) => (
          <OneQuestionToAdmin key={el.id} question={el} />
        ))}
      </div>
    </div>
  );
}
