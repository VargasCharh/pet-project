import type { QuestionsByCompanyType } from './CompanyTypes';

export type AnswerType = {
  id: number;
  answerTheoryOnQuestion: string;
  questionTeoryId: number;
  isCorrect: boolean;
  points: number;
};

export type QuestionType = {
  id: number;
  questionTeory: string;
  AnswerTheories: AnswerType[];
  companyId: number;
};

export type QuizStatus = 'active' | 'error' | 'finished' | 'loading' | 'timerOff';

export type TheoryQuestionsQuizType = {
  questions: QuestionsByCompanyType[];
  quizStatus: QuizStatus;
  index: number;
  points: number;
  secondsRemaining: number;
  chosenAnswer: AnswerType | null;
};
