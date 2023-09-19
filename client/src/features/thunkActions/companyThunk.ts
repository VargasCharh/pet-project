import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ChooseCompanyType, QuestionsByCompanyType } from '../../types/CompanyTypes';
import { getCompanies, getQuestionsByCompany } from '../../services/apiCompaniesService';

export const fetchCompaniesThunk = createAsyncThunk<ChooseCompanyType[]>(
  'choose/companies',
  async () =>
    getCompanies()
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const fetchQuestionsByCompanyThunk = createAsyncThunk<QuestionsByCompanyType[], number>(
  'choose/companies/questions',
  async (id) =>
    getQuestionsByCompany(id)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);
