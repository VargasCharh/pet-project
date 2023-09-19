import type { UserType } from "../types";
import apiInstance from "./apiConfig";

const getTop = (): Promise<UserType[]> =>
  apiInstance
    .get<UserType[]>('/api/profile/')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export default getTop;
  
