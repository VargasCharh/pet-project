const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, UserQuestion, Comment, TheoryQuestion }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(UserQuestion, { foreignKey: 'userId' });
      this.belongsToMany(TheoryQuestion, { through: 'UserAnswerTheories', foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      linkgit: DataTypes.STRING,
      linklinked: DataTypes.STRING,
      role: DataTypes.STRING,
      score: DataTypes.INTEGER,
      confirmCode: DataTypes.STRING,
      confirm: DataTypes.BOOLEAN,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
