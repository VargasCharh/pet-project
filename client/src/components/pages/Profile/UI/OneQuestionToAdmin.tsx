import React, { useState } from 'react';
import type { QuestionType, UserQuestionFormType, UserQuestionType } from '../../../../types';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { addAdminQuestionThunk, adminDeleteQuestionThunk } from '../../../../features/thunkActions';

type OneQuestionPropsType = {
  question: UserQuestionType;
};

export default function OneQuestionToAdmin({ question }: OneQuestionPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(question.userQuestion);
  const [editedAnswer, setEditedAnswer] = useState({
    correctAnswer: question.userCorrectAnswer,
    anyAnswer: '',
    anyAnswer2: '',
    anyAnswer3: '',
  });
  const [editedCompany, setEditedCompany] = useState(question.userCompany);

  const handleEdit = (): void => {
    setEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setEditedAnswer((prevAnswer) => ({
      ...prevAnswer,
      [name]: value,
    }));
  };

  const addAdminQuestionHandler = (
    e: React.FormEvent<HTMLFormElement & UserQuestionFormType>,
  ): void => {
    e.preventDefault();
    const data = { editedQuestion, editedAnswer, editedCompany };
    void dispatch(addAdminQuestionThunk(data));
    setEditing(false);
  };

  const deleteHandler = (id: QuestionType['id']): void => {
    void dispatch(adminDeleteQuestionThunk(id));
  };

  return (
    <form onSubmit={addAdminQuestionHandler}>
      <div className="flex flex-col mt-4 space-x-3 md:mt-6">
        <ul className="flex-grow text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-xs ">
            Вопрос:{' '}
            {editing ? (
              <input
                name="question"
                type="text"
                value={editedQuestion}
                onChange={(e) => setEditedQuestion(e.target.value)}
                className=" w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl text-xs"
              />
            ) : (
              question.userQuestion
            )}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-xs">
            Ответ от пользователя:{' '}
            {editing ? (
              <>
                <input
                  name="correctAnswer"
                  type="text"
                  value={editedAnswer.correctAnswer}
                  onChange={handleInputChange}
                  className=" w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 text-xs rounded-xl"
                />
                <input
                  name="anyAnswer"
                  type="text"
                  value={editedAnswer.anyAnswer}
                  onChange={handleInputChange}
                  placeholder="Дополнительный ответ"
                  className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl mt-2 text-xs"
                />
                <input
                  name="anyAnswer2"
                  type="text"
                  value={editedAnswer.anyAnswer2}
                  onChange={handleInputChange}
                  placeholder="Дополнительный ответ"
                  className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl mt-2 text-xs"
                />
                <input
                  name="anyAnswer3"
                  type="text"
                  value={editedAnswer.anyAnswer3}
                  onChange={handleInputChange}
                  placeholder="Дополнительный ответ"
                  className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl mt-2 text-xs"
                />
              </>
            ) : (
              question.userCorrectAnswer
            )}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 text-xs">
            Вопрос встречался в{' '}
            {editing ? (
              <input
                name="company"
                type="text"
                value={editedCompany}
                onChange={(e) => setEditedCompany(e.target.value)}
                className=" w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl text-xs"
              />
            ) : (
              question.userCompany
            )}
          </li>
          <li className="flex justify-around items-center px-4 py-2">
            {!editing ? (
              <>
                <button type="button" onClick={() => deleteHandler(question.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <button type="button" onClick={handleEdit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <button type="submit">Добавить вопрос</button>
                <button type="button" onClick={() => setEditing(false)}>
                  Отменить
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </form>
  );
}
