'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAnswerTheory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAnswerTheory.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    result: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserAnswerTheory',
  });
  return UserAnswerTheory;
};