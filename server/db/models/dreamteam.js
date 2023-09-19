'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DreamTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DreamTeam.init({
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DreamTeam',
  });
  return DreamTeam;
};