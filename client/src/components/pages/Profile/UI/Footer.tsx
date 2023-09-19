import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex justify-center rounded-lg shadow dark:bg-gray-800">
      <div className="h-32 w-full max-w-screen-xl mt-5 mb-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0"> */}
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ElSobes™
            </span> */}
          {/* </a> */}
          <ul className=" mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/team" className="mr-4 hover:underline md:mr-6 ">
                О нас
              </a>
            </li>
          </ul>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="#" className="hover:underline">
            ElSobes™
          </a>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
}
