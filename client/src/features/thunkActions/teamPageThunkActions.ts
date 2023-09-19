import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTeam } from "../../services/apiTeamService";
import type { TeamType } from "../../types/TeamTypes";


const getAllTeamThunk = createAsyncThunk<TeamType[]>(
  'team/getAllTeamThunk',
  async() =>
  getTeam()
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export default getAllTeamThunk