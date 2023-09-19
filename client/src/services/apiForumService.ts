import type { CommentFormType, CommentType, CompanyType, PostFormType, PostType } from "../types/ForumTypes";
import apiInstance from "./apiConfig";

export const getPostsComments = (): Promise<PostType[]> =>
  apiInstance
    .get<PostType[]>('/api/forum/posts')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const addPost = (post: PostFormType,): Promise<PostType> => 
  apiInstance
  .post<PostType>('/api/forum/posts/companies/', post)
  .then((response) => response.data)
  .catch((error) => Promise.reject(error));

export const getCompanies = (): Promise<CompanyType[]> =>
apiInstance
  .get<CompanyType[]>('/api/forum/posts/companies')
  .then((response) => response.data)
  .catch((error) => Promise.reject(error))

export const deletePost = (id: number): Promise<PostType['id']> => 
apiInstance
  .delete(`http://localhost:3001/api/forum/posts/companies/${id}`)
  .then(() => id)
  .catch((error) => Promise.reject(error));

  
export const updatePost = (data: PostFormType , id: PostType['id']): Promise<PostType> => 
apiInstance
.patch<PostType>(`http://localhost:3001/api/forum/posts/companies/${id}`, data)
.then((responce) => responce.data)
.catch((error) => Promise.reject(error));


export const addComment = (data: {comment: CommentFormType, id: number}): Promise<CommentType> =>
apiInstance
.post<CommentType>(`/api/forum/comments/${data.id}`, data)
.then((response) => response.data)
.catch((error) => Promise.reject(error));