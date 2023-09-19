

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  UserQuestion.init({
    userQuestion: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userCorrectAnswer: DataTypes.STRING,
    userCompany: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserQuestion',
  });
  return UserQuestion;
};