const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ PracticeQuestion, TheoryQuestion, Post }) {
      // define association here
      this.hasMany(PracticeQuestion, { foreignKey: 'companyId' });
      this.hasMany(TheoryQuestion, { foreignKey: 'companyId' });
      this.hasMany(Post, { foreignKey: 'companyId' });
    }
  }
  Company.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
