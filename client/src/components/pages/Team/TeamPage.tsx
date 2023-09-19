import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import getAllTeamThunk from '../../../features/thunkActions/teamPageThunkActions';

export default function TeamPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team.data);

  useEffect(() => {
    void dispatch(getAllTeamThunk());
  }, []);

  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Команда ElSobes
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            Наша команда включает в себя талантливых и энергичных энтузиастов, которые с горячим
            сердцем и преданностью работали над выпускным проектом в школе программирования Elbrus Coding Bootcamp. Мы
            стремимся к совершенству и вкладываем все наши знания и навыки в создание инновационного
            и высококачественного решения.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-end">
          {team?.map((person) => (
            <li key={person.name} >
              <div className="flex items-center gap-x-6">
                <img
                  className="h-46 w-32 rounded-full"
                  src={`http://localhost:3001${person.img}`}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
