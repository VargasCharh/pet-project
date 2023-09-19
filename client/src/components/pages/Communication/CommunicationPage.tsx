import React from 'react';
import 'flowbite';
import './CommunicationPage.css';
import ChatUsers from './ChatUsers';
import ParticleComponentChat from './ParticleComponentChat';
import useWsHook from '../../../hooks/useWsHook';
import Sidebar from '../Forum/UI/Sidebar';
import { useAppSelector } from '../../../features/redux/reduxHooks';

export default function CommunicationPage(): JSX.Element {
  const submitChatHandler = useWsHook();
  const companies = useAppSelector((state) => state.forum.companies);
  return (
    <>
      <Sidebar companies={companies} />

      <div className="communication-page-container">
        <ChatUsers submitChatHandler={submitChatHandler} />
        <ParticleComponentChat />
      </div>
    </>
  );
}
