const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TheoryQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, AnswerTheory, User }) {
      // define association here
      this.belongsTo(Company, { foreignKey: 'companyId' });
      this.hasMany(AnswerTheory, { foreignKey: 'questionTeoryId' });
      this.belongsToMany(User, { through: 'UserAnswerTheories', foreignKey: 'question_id' });
    }
  }
  TheoryQuestion.init({
    questionTeory: DataTypes.TEXT,
    companyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TheoryQuestion',
  });
  return TheoryQuestion;
};
