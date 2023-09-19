/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Karina123',
          email: 'karina123.123@example.com',
          password: await bcrypt.hash('123', 10),
          linkgit: 'https://github.com/kotekkarry2',
          linklinked: 'https://ru.linkedin.com/',
          role: 'admin',
          score: 0,
          confirm: true,
        },
        {
          name: 'Anton123',
          email: '11.11@example.com',
          password: await bcrypt.hash('123', 10),
          linkgit: 'https://github.com/kotekkarry2',
          linklinked: 'https://ru.linkedin.com/',
          role: 'user',
          score: 1000,
          confirm: true,
        },
        {
          name: 'Tania',
          email: '22.22@example.com',
          password: await bcrypt.hash('123', 10),
          linkgit: 'https://github.com/kotekkarry2',
          linklinked: 'https://ru.linkedin.com/',
          role: 'user',
          score: 258,
          confirm: true,
        },
        {
          name: 'VarHub',
          email: '33.33@example.com',
          password: await bcrypt.hash('123', 10),
          linkgit: 'https://github.com/kotekkarry2',
          linklinked: 'https://ru.linkedin.com/',
          role: 'user',
          score: 689,
          confirm: true,
        },
        {
          name: 'Artem300',
          email: '55.55@example.com',
          password: await bcrypt.hash('123', 10),
          linkgit: 'https://github.com/kotekkarry2',
          linklinked: 'https://ru.linkedin.com/',
          role: 'user',
          score: 576,
          confirm: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
