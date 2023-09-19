

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AnswerTheory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({TheoryQuestion}) {
      // define association here
      this.belongsTo(TheoryQuestion, { foreignKey: 'questionTeoryId' })
    }
  }
  AnswerTheory.init({
    answerTheoryOnQuestion: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN,
    questionTeoryId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnswerTheory',
  });
  return AnswerTheory;
};