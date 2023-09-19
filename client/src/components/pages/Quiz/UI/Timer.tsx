import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { setTick } from '../../../../features/redux/slices/theoryQuizSlice';

type TimerProps = {
  secondsRemaining: number;
};
export default function Timer({ secondsRemaining }: TimerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setTick());
    }, 1000);

    return () => clearTimeout(id);
  }, [secondsRemaining]);
  return (
    <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </span>
  );
}
