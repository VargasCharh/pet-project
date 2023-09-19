

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Posts', [
      {
        title: 'Что такое React?',
        body: 'Объясните основные концепции React и то, чем он отличается от других JavaScript-фреймворков.',
        companyId: 1,
        userId: 1
      },
      
      {
        title: 'Что такое компоненты в React?',
        body: 'Опишите концепцию компонентов в React и как они помогают в создании пользовательских интерфейсов.',
        companyId: 1,
        userId: 1
      },
      
      {
        title: 'Что такое JSX в React?',
        body: 'Объясните, что такое JSX и как он используется для написания компонентов в React.',
        companyId: 1,
        userId: 1
      },
      
      {
        title: 'Каковы основные особенности React?',
        body: 'Перечислите и объясните основные особенности, которые делают React популярным выбором для создания веб-приложений.',
        companyId: 1,
        userId: 1
      },
      
      {
        title: 'Что такое виртуальный DOM в React?',
        body: 'Опишите, как работает виртуальный DOM в React и почему он повышает производительность.',
        companyId: 2,
        userId: 2
      },
      
      {
        title: 'Что такое состояние (state) в React?',
        body: 'Объясните концепцию состояния (state) в React и как оно используется для управления данными и реактивностью.',
        companyId: 2,
        userId: 2
      },
      
      {
        title: 'Что такое хуки (hooks) в React?',
        body: 'Обсудите назначение хуков (hooks) в React и предоставьте примеры часто используемых хуков.',
        companyId: 2,
        userId: 2
      },
      
      {
        title: 'Как React обрабатывает маршрутизацию (routing)?',
        body: 'Объясните, как React управляет клиентской маршрутизацией и какие инструменты используются для навигации.',
        companyId: 3,
        userId: 3
      },
      
      {
        title: 'Что такое Redux и как он работает с React?',
        body: 'Введение в концепцию Redux и его роль в управлении состоянием приложения в React.',
        companyId: 3,
        userId: 3
      },
      
      {
        title: 'Какие существуют bew practices (лучшие практики) для оптимизации производительности в React?',
        body: 'Предоставьте советы и техники для улучшения производительности React-приложений.',
        companyId: 3,
        userId: 3
      }

    ], {});
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Posts', null, {});
     
  }
};
