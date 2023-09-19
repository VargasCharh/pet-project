import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import type { CompanyType, PostType } from '../../../../types/ForumTypes';
import useForumHook from '../../../../hooks/useForumHook';
import { useAppSelector } from '../../../../features/redux/reduxHooks';
import ModalUpdatePostBtn from './ModalUpdatePostBtn';
import CommentModalBtn from './CommentModalBtn';
import 'flowbite';

export type PostCardProps = {
  post: PostType;
  companies: CompanyType[];
};

export default function PostCard({ post, companies }: PostCardProps): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const { deletePostHandler } = useForumHook();

  const formattedDate = format(new Date(post.createdAt), 'dd MMMM yyyy', {
    locale: ruLocale,
  });
  return (
    <div className="m-10 pt-0 pl-10 pr-10 w-9/12 sm:ml-64">
      <div className="p-4 border-2 bg-gray-800 border-gray-400 rounded-lg dark:border-gray-700">
        <article>
          <div className="flex items-center justify-between mb-4 space-x-4">
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={`http://localhost:3001${post.User?.avatar}`}
                alt=""
              />
              <div className="space-y-1 font-medium ">
                <p className='text-gray-200'>
                  {post.User?.name}
                  <time
                    dateTime="2014-08-16 19:00"
                    className="text-xs block text-gray-500"
                  >
                    Добавлено {formattedDate}
                  </time>
                </p>
              </div>
            </div>
            {user.data?.id === post.User?.id && (
              <div>
                <button
                  onClick={() => deletePostHandler(post.id)}
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Удалить
                </button>
                <ModalUpdatePostBtn companies={companies} post={post} />
              </div>
            )}
          </div>
          <h2 className="text-lg font-bold text-purple-400 dark:text-white">{post.title}</h2>

          <p className="my-5 text-gray-200 dark:text-gray-400">{post.body}</p>
          <span className="mb-5 text-xs text-gray-200 ">
            Вопрос встречался в {post.Company?.name}
          </span>

          <h1 id="accordion-collapse-heading" className='my-5'>
            <span className='text-gray-200 font-semibold '>Комментарии</span>
          </h1>

          {post.Comments && post.Comments.length > 0
            ? post.Comments?.map((comment) => (
                <div key={comment.id} className="flex text-white ">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={`http://localhost:3001${comment.User.avatar}`}
                    alt=""
                  />
                  <p className="ml-5 text-gray-400" key={comment.id}>{comment.body}</p>
                </div>
              ))
            : <p className=' text-gray-500'>Пока нет комментариев</p>}

          <aside>
            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <CommentModalBtn post={post} />
            </div>
          </aside>
        </article>
      </div>
    </div>
  );
}
