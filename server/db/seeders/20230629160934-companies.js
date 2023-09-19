/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'Яндекс',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/2048px-Yandex_icon.svg.png',
        },
        {
          name: 'Сбер',
          img: 'https://free-png.ru/wp-content/uploads/2020/09/icon_sber-01.png',
        },
        {
          name: 'Тинькофф',
          img: 'https://acdn.tinkoff.ru/static/pages/files/51e6f562-46d7-4e67-9da0-8fa8f9146c15.png',
        },
        {
          name: 'Озон',
          img: 'https://brandlab.ozon.ru/images/tild3432-3763-4037-b038-333066316536__ios_classic_icon-1.png',
        },
        {
          name: 'Авито',
          img: 'https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-480.png',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
