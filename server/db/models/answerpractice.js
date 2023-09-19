

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AnswerPractice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({PracticeQuestion}) {
      // define association here
      this.belongsTo(PracticeQuestion, {foreignKey: 'questionPracticeId'})
    }
  }
  AnswerPractice.init({
    answerPracticeOnQuestion: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN,
    questionPracticeId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnswerPractice',
  });
  return AnswerPractice;
};