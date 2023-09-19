import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../features/redux/reduxHooks';
import useProfileUpdateHook from '../../../../hooks/useProfileUpdateHook';
import { userLogoutThunk } from '../../../../features/thunkActions';

export default function Profile(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const { updateHandler } = useProfileUpdateHook();
  const [editing, setEditing] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
    linkgit: '',
    linklinked: '',
  });
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.data) {
      setUpdateData({
        name: user.data.name || '',
        email: user.data.email || '',
        linkgit: user.data.linkgit || '',
        linklinked: user.data.linklinked || '',
      });
    }
  }, [user.data]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUpdateData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditClick = (): void => {
    setEditing(true);
  };

  const logoutHandler = (): void => {
    void dispatch(userLogoutThunk());
    navigate('/');
  };

  return (
    <div className="my-5 ml-5 mr-5 w-full max-w-sm bg-gray-800 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end my-4 px-1 pt-1" />
      <div className="flex flex-col items-center pb-10">
        {editing ? (
          <form
            className="flex-col items-center pb-10"
            onSubmit={(e) => {
              updateHandler(e, user.data?.id);
              setEditing(false);
            }}
          >
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 -mb-3 rounded-full shadow-lg"
                src={`http://localhost:3001${user.data?.avatar}`}
                alt="///"
              />

              <button type="button">
                <label htmlFor="file">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className=" w-6 h-6 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </label>
              </button>
              <input id="file" type="file" name="file" style={{ display: 'none' }} />
              <input
                className=" w-full px-4 py-2 e border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-700 rounded-xl"
                name="name"
                value={updateData.name}
                onChange={changeHandler}
              />
            </div>
            <div className="flex mt-5 space-x-3 md:mt-5">
              <ul className="text-sm font-medium bg-white border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <input
                    className=" text-black w-full px-4 py-2 border border-gray-600 rounded-t-lg ark:border-gray-700 dark:bg-gray-700 rounded-xl"
                    name="email"
                    value={updateData.email}
                    onChange={changeHandler}
                  />
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <input
                    className="text-black w-full px-4 py-2 border border-gray-600 rounded-t-lg ark:border-gray-700 dark:bg-gray-700 rounded-xl"
                    name="linkgit"
                    placeholder='GitHub'
                    value={updateData.linkgit}
                    onChange={changeHandler}
                  />
                </li>
                <li className="w-full px-4 py-2 ">
                  <input
                    className="text-black w-full px-4 py-2 border border-gray-600 rounded-t-lg ark:border-gray-700 dark:bg-gray-700 rounded-xl"
                    name="linklinked"
                    placeholder='LinkedIn'
                    value={updateData.linklinked}
                    onChange={changeHandler}
                  />
                </li>
              </ul>
            </div>
            <button
              type="submit"
              className='mt-10 text-white hover:text-white border border-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700  focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
            >
              Сохранить
            </button>
          </form>
        ) : (
          <div>
            <div className="flex flex-col items-center">
              {user.data?.gitAuth ? (
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={user.data?.avatar}
                  alt="????"
                />
              ) : (
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={`http://localhost:3001${user.data?.avatar}`}
                  alt="????"
                />
              )}
              <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
                {user.data?.name}
              </h5>
            </div>
            <div className="mt-10">
              <ul className=" pt-3 pb-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  email: {user.data?.email}
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  Git: {user.data?.linkgit}
                </li>
                <li className="w-full px-4 py-2 ">LinkedIn: {user.data?.linklinked}</li>
              </ul>
            </div>

            <button
              type="button"
              className='mt-10 text-white hover:text-white border border-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
   
              onClick={handleEditClick}
            >
      
                Редактировать

            </button>
            <button
              onClick={logoutHandler}
              type="button"
              className='mt-10 text-white hover:text-white border border-white hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
            >
              Выйти
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
