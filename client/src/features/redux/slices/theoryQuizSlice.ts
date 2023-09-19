import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type {
  AnswerType,
  TheoryQuestionsQuizType,
} from '../../../types/QuestionTypes';
import { SECONDS_PER_QUEST } from '../../../constants/quizconsts';
import { getTheoryQuestionThunk } from '../../thunkActions/theoryQuizThunkAction';
import type { QuestionsByCompanyType } from '../../../types/CompanyTypes';

const initialState: TheoryQuestionsQuizType = {
  questions: [],
  quizStatus: 'loading',
  index: 0,
  points: 0,
  secondsRemaining: 15,
  chosenAnswer: null,
};

const theoryQuizSlice = createSlice({
  name: 'theoryQuiz',
  initialState,
  reducers: {
    setTheoryQuestions(state, action: PayloadAction<QuestionsByCompanyType[]>) {
      return { ...state, questions: action.payload, quizStatus: 'active' };
    },
    setErrorStatus(state) {
      state.quizStatus = 'error';
    },
    setQuizStart(state) {
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECONDS_PER_QUEST,
      };
    },
    getNewAnswer(state, action: PayloadAction<AnswerType>) {
      if (action.payload.isCorrect) {
        state.points += action.payload.points;
      }
      if (state.index === state.questions.length - 1) {
        state.quizStatus = 'finished';
      }
      //   state.index += 1;
      state.chosenAnswer = action.payload;
    },
    setNextQuestion(state) {
      state.index += 1;
      state.chosenAnswer = null;
    },
    setQuizEnd(state) {
      state.quizStatus = 'finished';
    },
    setTick(state) {
      if (state.secondsRemaining > 0) {
        state.secondsRemaining -= 1;
      } else {
        state.quizStatus = 'timerOff';
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTheoryQuestionThunk.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.quizStatus = 'active';
      state.secondsRemaining = state.questions.length * SECONDS_PER_QUEST;
    });

    // builder.addCase(getStatsThunk.fulfilled, (state, action) => {
    //   state.questions = action.payload;
    //   state.quizStatus = 'active';
      // state.secondsRemaining = state.questions.length * SECONDS_PER_QUEST;
    // });
  },
});

export default theoryQuizSlice.reducer;
export const {
  setTheoryQuestions,
  setErrorStatus,
  setQuizStart,
  getNewAnswer,
  setQuizEnd,
  setTick,
  setNextQuestion,
} = theoryQuizSlice.actions;
