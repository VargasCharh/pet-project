import type { ChooseCompanyType, QuestionsByCompanyType } from '../types/CompanyTypes';
import apiInstance from './apiConfig';

export const getCompanies = (): Promise<ChooseCompanyType[]> =>
  apiInstance
    .get<ChooseCompanyType[]>(`/api/theoryQuestion/companies`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getQuestionsByCompany = (id: number): Promise<QuestionsByCompanyType[]> =>
  apiInstance
    .get<QuestionsByCompanyType[]>(`/api/theoryQuestion/questionbycompany/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
