import React from 'react';
import type { AnswerType, QuestionType } from '../../../../types/QuestionTypes';
import { useAppDispatch } from '../../../../features/redux/reduxHooks';
import { getNewAnswer } from '../../../../features/redux/slices/theoryQuizSlice';
import { getValidationThunk } from '../../../../features/thunkActions/theoryQuizThunkAction';

type QuestionProps = {
  question: QuestionType;
  answer: AnswerType | null;
};

export default function Question({ question, answer: chosenAnswer }: QuestionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAnswered = chosenAnswer !== null;
  
  return (
    <div>
      <h2 className=" my-4 relative py-2 transition-all ease-in px-10 text-zinc-200 border border-gray-200 duration-75 rounded-md group-hover:bg-opacity-0">
        {question.questionTeory}
      </h2>
      <div className="options">
        {question.AnswerTheories.map((answerTheoryOnQuestion) => (
          <button
            type="button"
            className={`bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              answerTheoryOnQuestion.id === chosenAnswer?.id ? 'answer' : ''
            } ${isAnswered ? (answerTheoryOnQuestion.isCorrect ? 'correct' : 'wrong') : ''}`}
            key={answerTheoryOnQuestion.id}
            disabled={isAnswered}
            // onClick={() => dispatch(getNewAnswer(answerTheoryOnQuestion))}
            onClick={() => {
              dispatch(getNewAnswer(answerTheoryOnQuestion));
              void dispatch(getValidationThunk(answerTheoryOnQuestion));
            }}
          >
            {answerTheoryOnQuestion.answerTheoryOnQuestion}
          </button>
        ))}
      </div>
    </div>
  );
}
