

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AnswerPractices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answerPracticeOnQuestion: {
        type: Sequelize.STRING
      },
      isCorrect: {
        type: Sequelize.BOOLEAN
      },
      questionPracticeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PracticeQuestions',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      points: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AnswerPractices');
  }
};