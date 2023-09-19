import { createAsyncThunk } from "@reduxjs/toolkit";
import getTop from "../../services/apiProfileService";
import type { UserType } from "../../types";

const getAllTopThunk = createAsyncThunk<UserType[]>(
  'top/getAll',
  async() =>
  getTop()
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export default getAllTopThunk;

