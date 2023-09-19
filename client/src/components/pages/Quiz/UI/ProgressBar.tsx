import React from 'react';
import type { AnswerType } from '../../../../types/QuestionTypes';

type ProgressBarProps = {
  index: number;
  numberOfQuestions: number;
  maximumPoints: number;
  points: number;
  answer: AnswerType | null;
};

export default function ProgressBar({
  index,
  numberOfQuestions,
  maximumPoints,
  points,
  answer,
}: ProgressBarProps): JSX.Element {
  const progressWidth = `${((index + Number(answer !== null)) / numberOfQuestions) * 100}%`;

  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  h-2.5 rounded-full"
          style={{ width: progressWidth }}
        />
      </div>
      <p className="text-4xl py-5 text-zinc-200">
        Question {index + 1}/{numberOfQuestions}
      </p>
      <p className="text-2xl py-3 text-zinc-200 ">
        Points: {points} / {maximumPoints}
      </p>
    </>
  );
}
