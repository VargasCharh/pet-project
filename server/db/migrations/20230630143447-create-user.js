/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      linkgit: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      linklinked: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: '/img/defaultAvatar.png',
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      confirmCode: {
        type: Sequelize.STRING,
      },
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
