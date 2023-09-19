import React from 'react';
import type { PostType } from '../../../../types/ForumTypes';
import useForumHook from '../../../../hooks/useForumHook';

export type CommentTypeProps = {
  post: PostType;
};

export default function CommentModalBtn({ post }: CommentTypeProps): JSX.Element {
  const { addCommentHandler } = useForumHook();

  return (
    <>
      <button
        data-modal-target={`commentModal-${post.id}`}
        data-modal-toggle={`commentModal-${post.id}`}
        className="block text-white bg-gray-900 hover:bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Добавить комментарий
      </button>

      <div
        id={`commentModal-${post.id}`}
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide={`commentModal-${post.id}`}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="mb-6">
                <form onSubmit={(e) => addCommentHandler(e, post.id)}>
                  <div className="w-full mb-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      <textarea
                        id="comment"
                        name="body"
                        rows="4"
                        className="w-full h-80 px-0 text-base text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Оставьте комментарий"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button
                        type="submit"
                        className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-800"
                      >
                        Добавить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
