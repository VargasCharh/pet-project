import type React from 'react';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  addCommentThunk,
  addPostThunk,
  deletePostThunk,
  getAllCompaniesThunk,
  updatePostThunk,
} from '../features/thunkActions/forumThunkActions';
import type { CommentType, PostType } from '../types/ForumTypes';

export type SubmitHandler = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deletePostHandler: (id: PostType['id']) => void;
  updateHandler: (e: React.FormEvent<HTMLFormElement>, id: PostType['id']) => void;
  addCommentHandler: (e: React.FormEvent<HTMLFormElement>, id: CommentType['id']) => void;
};

export default function useForumHook(): SubmitHandler {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCompaniesThunk());
  }, []);

  const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post = Object.fromEntries(new FormData(e.currentTarget));
    e.currentTarget.reset();
    void dispatch(addPostThunk(post));
  },[]);

  const deletePostHandler = useCallback((id: PostType['id']): void => {
    void dispatch(deletePostThunk(id));
  },[]);

  const updateHandler = useCallback((e: React.FormEvent<HTMLFormElement>, id: PostType['id']): void => {
    e.preventDefault()
    const updateData = Object.fromEntries(new FormData(e.currentTarget));
    e.currentTarget.reset();
    void dispatch(updatePostThunk({data: updateData, id}))
  },[])

  const addCommentHandler = useCallback((e: React.FormEvent<HTMLFormElement>, id: CommentType['id']): void => {
    e.preventDefault()
    const newComment = Object.fromEntries(new FormData(e.currentTarget));
    e.currentTarget.reset();
    void dispatch(addCommentThunk({data: newComment.body, id}))
  },[])

  return { submitHandler, deletePostHandler, updateHandler, addCommentHandler };
}
