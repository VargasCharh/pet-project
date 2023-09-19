import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ChooseCompanyType } from '../../../types/CompanyTypes';
import { fetchCompaniesThunk } from '../../thunkActions/companyThunk';

const initialState: ChooseCompanyType[] = [];

const companySlice = createSlice({
  name: 'chooseCompany',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        fetchCompaniesThunk.fulfilled, (state, action: PayloadAction<ChooseCompanyType[]>) => action.payload,
    );
  },
});

export default companySlice.reducer;
