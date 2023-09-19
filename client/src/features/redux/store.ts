import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import wsSlice from './slices/wsSlice';
import profileSlice from './slices/profileSlice';
import theoryQuizSlice from './slices/theoryQuizSlice';
import questionSlice from './slices/questionSlice';
import forumSlice from './slices/forumSlice';
import teamSlice from './slices/teamSlice';
import companySlice from './slices/companySlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    ws: wsSlice,
    profile: profileSlice,
    theoryQuestion: theoryQuizSlice,
    question: questionSlice,
    forum: forumSlice,
    team: teamSlice,
    questionsByCompany: companySlice,
  },
});

export default store;
