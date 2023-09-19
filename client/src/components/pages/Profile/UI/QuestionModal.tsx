import React, { useState } from 'react';
import 'flowbite';
import type { UserQuestionFormType } from '../../../../types/UserQuestionTypes';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { addQuestionThunk } from '../../../../features/thunkActions/userQuestionThunkAction';

export default function QuestionModal(): JSX.Element {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [company, setCompany] = useState('');
  const dispatch = useAppDispatch();

  const addQuestionHandler = (e: React.FormEvent<HTMLFormElement & UserQuestionFormType>): void => {
    e.preventDefault();
    const formData = { question, answer, company };
    void dispatch(addQuestionThunk(formData));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCompany(e.target.value);
  };
  return (
    <>
      <button
        type="button"
        className="w-full px-4 py-2 rounded-b-lg"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
      >
        Добавить вопрос
      </button>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Оставь вопрос для квиза
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <form onSubmit={addQuestionHandler}>
                <textarea
                  name="question"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Оставь вопрос..."
                  value={question}
                  onChange={handleQuestionChange}
                />
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2 pb-2"
                >
                  Введи правильный ответ
                  <input
                    value={answer}
                    onChange={handleAnswerChange}
                    name="answer"
                    type="text"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <label
                  htmlFor="large-input2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2 pb-2"
                >
                  В какой компании встретился вопрос
                  <input
                    value={company}
                    onChange={handleCompanyChange}
                    name="company"
                    type="text"
                    id="large-input2"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Отправить
                  </button>
                  <button
                    data-modal-hide="defaultModal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
