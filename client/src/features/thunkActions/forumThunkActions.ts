import { createAsyncThunk } from "@reduxjs/toolkit"
import type { CommentFormType, CommentType, CompanyType, PostFormType, PostType } from "../../types/ForumTypes"
import { getPostsComments, addPost, getCompanies, deletePost, updatePost, addComment } from "../../services/apiForumService"

export const getAllPostsCommentsThunk = createAsyncThunk<PostType[]>(
  'forum/getAllPostsComments',
  async() =>
  getPostsComments()
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export const addPostThunk = createAsyncThunk<PostFormType>(
  'forum/addPostThunk',
  async(post) => 
  addPost(post)
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export const getAllCompaniesThunk = createAsyncThunk<CompanyType[]>(
  'forum/getAllCompaniesThunk',
  async() =>
  getCompanies()
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export const deletePostThunk = createAsyncThunk<PostType['id']>(
  'forum/deletePost',
  async(data) => 
  deletePost(data)
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export const updatePostThunk = createAsyncThunk<PostType,{id: PostType['id'], data: PostFormType} >(
  'forum/updatePost',
  async({data, id}) =>
  updatePost(data, id)
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

export const addCommentThunk = createAsyncThunk<CommentType, {id: PostType['id'], data: CommentFormType}>(
  'forum/addCommentThunk',
  async(data) =>
  addComment(data)
  .then(res => res)
  .catch((err) => Promise.reject(err))
)

