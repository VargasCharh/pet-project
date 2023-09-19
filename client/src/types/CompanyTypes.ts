export type ChooseCompanyType = {
  id: number;
  name: string;
  img: string;
};

export type QuestionsByCompanyType = {
  id: number;
  questionTeory: string;
  companyId: number;
  AnswerTheories: AnswerTheory[];
  Company: ChooseCompanyType;
};

export type AnswerTheory = {
  id: number;
  answerTheoryOnQuestion: string;
  isCorrect: boolean;
  questionTeoryId: number;
  points: number;
};
