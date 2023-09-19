import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserQuestionType } from '../../types/UserQuestionTypes';
import {
  addAdminQuestions,
  addQuestion,
  adminDeleteQuestion,
  getAdminQuestions,
} from '../../services/apiTheoryQuestionService';
import type { QuestionType } from '../../types/QuestionTypes';

export const addQuestionThunk = createAsyncThunk<UserQuestionType, FormData>(
  'question/addQuestion',
  async (data) =>
    addQuestion(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

// админ получает вопросы
export const adminQuestionThunk = createAsyncThunk<QuestionType[]>(
  'question/adminQuestion',
  async () =>
    getAdminQuestions()
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);
// админ добавляет вопросы
export const addAdminQuestionThunk = createAsyncThunk<UserQuestionType, FormData>(
  'question/addAdminQuestion',
  async (data) =>
    addAdminQuestions(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

// админ удаляет вопросы

export const adminDeleteQuestionThunk = createAsyncThunk<UserQuestionType['id']>(
  'question/adminDeleteQuestion',
  async (data) =>
    adminDeleteQuestion(data)
      .then((response) => response)
      .catch((err) => Promise.reject(err)),
);
