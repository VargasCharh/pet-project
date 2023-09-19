import React, { useDebugValue, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import TheoryCard from './UI/TheoryCard';
import Loader from './UI/Loader/Loader';
import Error from './UI/Error';
import Question from './UI/Question';
import Next from './UI/Next';
import ProgressBar from './UI/ProgressBar';
import Finish from './UI/Finish';
import Timer from './UI/Timer';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { getTheoryQuestionThunk } from '../../../features/thunkActions/theoryQuizThunkAction';
import ResultPage from '../ResultPage';

export default function TheoryPage(): JSX.Element {
  const { companyId } = useParams();
  const { questions, quizStatus, index, points, secondsRemaining, chosenAnswer } = useAppSelector(
    (state) => state.theoryQuestion,
  );
  const dispatch = useAppDispatch();
// counting of maximum points in the quiz
  const numberOfQuestions = questions.length;
  const answers = questions.map((el) => el.AnswerTheories).flat();
  const pointsArray = answers.map((el) => el.points);
  const maximumPoints = pointsArray.reduce((acc, curr) => acc + curr, 0);
  useEffect(() => {
    void dispatch(getTheoryQuestionThunk(Number(companyId)));
  }, []);



  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <TheoryCard>
          {quizStatus === 'loading' && <Loader />}
          {quizStatus === 'error' && <Error />}
          {quizStatus === 'active' && (
            <>
              <ProgressBar
                index={index}
                numberOfQuestions={numberOfQuestions}
                maximumPoints={maximumPoints}
                points={points}
                answer={chosenAnswer}
              />
              <Question question={questions[index]} answer={chosenAnswer} />

              <Next answer={chosenAnswer} index={index} numberOfQuestions={numberOfQuestions} />
              <Timer secondsRemaining={secondsRemaining} />
              {/* {!chosenAnswer && (
              )} */}
            </>
          )}
          {quizStatus === 'timerOff' && <Finish />}
        </TheoryCard>
      </div>
      {quizStatus === 'finished' && <ResultPage points={points} maximumPoints={maximumPoints} />}
    </div>
  );
}
