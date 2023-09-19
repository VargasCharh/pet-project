import React, { useEffect } from 'react';
import 'flowbite';
import Sidebar from './UI/Sidebar';
import PostCard from './UI/PostCard';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { getAllPostsCommentsThunk } from '../../../features/thunkActions/forumThunkActions';

export default function ForumPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.forum.data);
  const companies = useAppSelector((state) => state.forum.companies);

  useEffect(() => {
    void dispatch(getAllPostsCommentsThunk());
  }, []);

  return (
    <>
      <Sidebar companies={companies} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} companies={companies} />
      ))}
    </>
  );
}
