import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../features/redux/reduxHooks';
import getAllTopThunk from '../../../../features/thunkActions/profileThunkActions';
import Top from './Top';

export default function Statistics(): JSX.Element {
  const dispatch = useAppDispatch();
  const top = useAppSelector((state) => state.profile);
  const questionAll = 100;
  const questionRight = 80;
  const sliceSize = 100 / questionAll;

  useEffect(() => {
    void dispatch(getAllTopThunk());
  }, []);

  return (
    <div className="w-full max-w-md p-4 mx-5 my-5 bg-gray-800 border border-gray-400 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-white dark:text-white">
          Ваша статистика
        </h5>
      </div>

      <div className="donut-chart bg-gray-200">
        <div
          className="donut-chart__slice bg-blue-500"
          style={{
            transform: `rotate(${sliceSize * questionRight}deg)`,
            clipPath: `polygon(50% 0, 100% 0, 100% 100%)`,
          }}
        />
        <div
          className="donut-chart__slice bg-yellow-500"
          style={{
            transform: `rotate(${sliceSize * (questionAll - questionRight)}deg)`,
            clipPath: `polygon(50% 0, 100% 0, 100% 100%)`,
          }}
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-white dark:text-white">
          Рейтинг лучших игроков
        </h5>
      </div>
      {top.data.map((user) => (
        <Top key={user.id} user={user} />
      ))}
    </div>
  );
}
