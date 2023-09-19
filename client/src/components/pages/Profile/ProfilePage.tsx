import React from 'react';
import Menu from './UI/Menu';
import Statistics from './UI/Statistics';
import Profile from './UI/Profile';
import Footer from './UI/Footer';
import { useAppSelector } from '../../../features/redux/reduxHooks';
import QuestionToAdmin from './UI/QuestionToAdmin';

export default function ProfilePage(): JSX.Element {

  const user = useAppSelector((state) => state.user.data);
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-20 flex justify-around">
        <div className="flex">
          <Menu />
          {user?.role === 'admin' ? <QuestionToAdmin /> : <Statistics />}
          <Profile />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
