

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DreamTeams', [
      {
        name: 'Вардгес Чархифалакян',
        img: '/img/Vargas.jpeg',
        role: 'Fullstack developer'
      },
            {
        name: 'Артём Сайгашкин',
        img: '/img/Artem.jpg',
        role: 'Fullstack developer'
      },
            {
        name: 'Татьяна Батюкова',
        img: '/img/Tanya.jpg',
        role: 'Fullstack developer'
      },
            {
        name: 'Карина Бондарь',
        img: '/img/Karina.jpg',
        role: 'Team lead && fullstack developer'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DreamTeams', null, {});
  }
};
