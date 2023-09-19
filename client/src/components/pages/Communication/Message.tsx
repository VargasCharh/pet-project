import React from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import type { WsFormType } from '../../../types';

export type MessageProp = {
  submitChatHandler: (e: WsFormType) => void;
};

export default function Message({ submitChatHandler }: MessageProp): JSX.Element {
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [text, setText] = React.useState('');

  const addEmoji = (e) => {
    const sym = e.unified.split('_');
    const codeArray = [];
    sym.forEach((el) => codeArray.push(`0x${el}`));
    const emoji = String.fromCodePoint(...codeArray);
    setText((prevText) => prevText + emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitChatHandler(e);
    setText(''); // Reset the text state to an empty string
  };

  return (
    <form className="mt-[100px] fixed w-[39%]" onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <button
          type="button"
          className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          onClick={() => setShowEmoji(!showEmoji)}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Add emoji</span>
        </button>
        {showEmoji && (
          <div className="absolute mt-[-400px]  right-2">
            <Picker
              data={data}
              emojiSize={16}
              emojiButtonSize={27}
              onEmojiSelect={addEmoji}
              maxFrequentRows={0}
            />
          </div>
        )}
        <input
          id="chat"
          name="message"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          style={{ overflow: 'auto' }}
          value={text} // Bind the value of the input field to the text state
          onChange={(e) => setText(e.target.value)} // Update the text state when the input value changes
        />
        <button
          type="submit"
          id="button-send-message"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}
