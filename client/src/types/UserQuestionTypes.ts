export type UserQuestionType = {
  id: number;
  userQuestion: string;
  userCorrectAnswer: string;
  userCompany: string;
};

export type UserQuestionFormType = {
  userQuestion: HTMLInputElement;
  userCorrectAnswer: HTMLInputElement;
  userCompany: HTMLInputElement;
};

// userId: number
// file: HTMLInputElement & { files: FileList };
