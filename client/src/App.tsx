import { Route, Routes } from 'react-router-dom';
import React from 'react';
import TheoryPage from './components/pages/Quiz/TheoryPage';
import StartingQuizPage from './components/pages/Quiz/StartingQuizPage';
import AuthPage from './components/pages/Auth/AuthPage';
import ProfilePage from './components/pages/Profile/ProfilePage';
import TeamPage from './components/pages/Team/TeamPage';
import ForumPage from './components/pages/Forum/ForumPage';
import { useAppDispatch, useAppSelector } from './features/redux/reduxHooks';
import { userCheckThunk } from './features/thunkActions';
import PracticePage from './components/pages/PracticePage/PracticePage';
import CommunicationPage from './components/pages/Communication/CommunicationPage';
import Lobby from './components/pages/VideoChat/Lobby';
import PrivateRoute from './Hoks/PrivateRoute';
import Room from './components/pages/VideoChat/Room';
import ModalEnd from './components/pages/PracticePage/ModalEnd';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);

  const user = useAppSelector((state) => state.user);
  return (
    <Routes>
      <Route element={<PrivateRoute isAllowed={user.data?.confirm !== true} redirect="/profile" />}>
        <Route path="/" element={<AuthPage />} />
      </Route>
      <Route element={<PrivateRoute isAllowed={user.status !== 'guest'} redirect="/" />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/quiz" element={<StartingQuizPage />} />
        <Route path="/companies/:companyId/questions" element={<TheoryPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/chat" element={<CommunicationPage />} />
        <Route path="/choose" element={<StartingQuizPage />} />
        <Route path="/videochat" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/modalend" element={<ModalEnd />} />
      </Route>
    </Routes>
  );
}

export default App;
