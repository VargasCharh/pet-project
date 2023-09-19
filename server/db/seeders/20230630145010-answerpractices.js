

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AnswerPractices', [
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 1,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 2,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 3,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 4,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 5,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 6,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 7,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 8,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 9,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 10,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 11,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 12,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 13,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 14,
        isCorrect: true,
        points: 100,
      },
      {
        answerPracticeOnQuestion: '',
        questionPracticeId: 15,
        isCorrect: true,
        points: 100,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AnswerPractices', null, {});
  }
};
