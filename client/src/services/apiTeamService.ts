import type { TeamType } from "../types/TeamTypes";
import apiInstance from "./apiConfig";


export const getTeam = (): Promise<TeamType[]> =>
apiInstance
  .get<TeamType[]>('/api/team/')
  .then((response) => response.data)
  .catch((error) => Promise.reject(error))