import type { QuestionType, AnswerType } from '../types/QuestionTypes';
import type { UserQuestionType } from '../types/UserQuestionTypes';
import type { QuestionsByCompanyType } from '../types/CompanyTypes';
import apiInstance from './apiConfig';
import type { UserType } from '../types';

export const getQuestions = (companyId: number): Promise<QuestionsByCompanyType[]> =>
  apiInstance
    .get<QuestionsByCompanyType[]>(`api/theoryQuestion/companies/${companyId}/questions`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getAnswerValidation = (answerTheoryOnQuestion: AnswerType): Promise<AnswerType> =>
  apiInstance
    .post<AnswerType>('api/theoryQuestion/validate', { answer: answerTheoryOnQuestion })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const addQuestion = (data: FormData): Promise<UserQuestionType> =>
  apiInstance
    .post<UserQuestionType>('/api/newQuestion', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getAdminQuestions = (): Promise<QuestionType[]> =>
  apiInstance
    .get<QuestionType[]>('api/newQuestion')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const addAdminQuestions = (data: FormData): Promise<UserQuestionType> =>
  apiInstance
    .post<UserQuestionType>('/api/adminQuestion', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const adminDeleteQuestion = (id: number): Promise<UserQuestionType['id']> =>
  apiInstance
    .delete<UserQuestionType['id']>(`/api/newQuestion/${id}`)
    .then(() => id)
    .catch((error) => Promise.reject(error));

// export const getStatsTheoryQuestion = (): Promise<UserType> =>
//   apiInstance
//     .get('/api/theoryQuestion/score')
//     .then((response) => response.data.score)
//     .catch((error) => Promise.reject(error));
// VITE_BASE_URL=http://localhost:3001
