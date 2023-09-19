import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AnswerType, QuestionType } from '../../types/QuestionTypes';
import { getAnswerValidation, getQuestions } from '../../services/apiTheoryQuestionService';
import type { QuestionsByCompanyType } from '../../types/CompanyTypes';
import { getNewAnswer } from '../redux/slices/theoryQuizSlice';

export const getTheoryQuestionThunk = createAsyncThunk<QuestionsByCompanyType[], number>(
  'theory/getQuestion',
  async (id) =>
    getQuestions(id)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

// export const getQuestionsByCompanyThunk = createAsyncThunk<QuestionsByCompanyType[], number>(
//   'choose/companies/questions',
//   async (id) =>
//     getQuestionsByCompany(id)
//       .then((res) => res)
//       .catch((err) => Promise.reject(err)),
// );

export const getValidationThunk = createAsyncThunk(
  'theory/getValidation',
  async (answerTheoryOnQuestion: AnswerType, { dispatch }) =>
    getAnswerValidation(answerTheoryOnQuestion)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

// export const getStatsThunk = createAsyncThunk('theory/getStats',
// async () => 

// )