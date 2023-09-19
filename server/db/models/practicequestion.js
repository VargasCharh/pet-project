const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PracticeQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, AnswerPractice }) {
      // define association here
      this.belongsTo(Company, { foreignKey: 'companyId' });
      this.hasMany(AnswerPractice, { foreignKey: 'questionPracticeId' });
    }
  }
  PracticeQuestion.init(
    {
      questionPractice: DataTypes.TEXT,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PracticeQuestion',
    },
  );
  return PracticeQuestion;
};
