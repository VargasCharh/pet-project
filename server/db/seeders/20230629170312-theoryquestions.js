/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'TheoryQuestions',
      [
        {
          questionTeory: `Есть некоторая строка (const str = 'Hi,kotek';), что будет, если мы возьмем str[0]?`,

          companyId: 1,
        },
        {
          questionTeory: `Как заменить элемент в массиве?`,
          companyId: 1,
        },
        {
          questionTeory: `Какое скрытое свойство имеет объект?`,
          companyId: 1,
        },
        {
          questionTeory: `Как можно кратко записать 1.000.000.000?`,
          companyId: 1,
        },
        {
          questionTeory: `Округление в меньшую сторону делает...`,
          companyId: 1,
        },
        {
          questionTeory: `Что не является методом чисел...`,
          companyId: 2,
        },
        {
          questionTeory: `С чего может начинаться имя переменной?`,
          companyId: 2,
        },
        {
          questionTeory: `Сколько типов данных существует?`,
          companyId: 2,
        },
        {
          questionTeory: `undefined является каким значением?`,
          companyId: 2,
        },
        {
          questionTeory: `Чему равно a и c?
        let a = 1, b = 1;\n
        let c = ++a;\n
let d = b++;
        `,
          companyId: 2,
        },
        {
          questionTeory: `Что будет давать true?`,
          companyId: 3,
        },
        {
          questionTeory: `Что выведет код ниже?\n
        alert( null || 2 && 3 || 4 );`,
          companyId: 3,
        },
        {
          questionTeory: `Что такое 'MVC'`,
          companyId: 3,
        },
        {
          questionTeory: `Что не относится к Javascript, как к языку?`,
          companyId: 3,
        },
        {
          questionTeory: `Как нельзя явно задать значение this?`,
          companyId: 3,
        },
        {
          questionTeory: `Какой оператор используется для сравнения значений по их типу и значению в JavaScript?`,
          companyId: 4,
        },
        {
          questionTeory: `Какое свойство в CSS используется для изменения цвета текста?`,
          companyId: 4,
        },
        {
          questionTeory: `Какая функция используется для добавления нового элемента в конец массива в JavaScript?`,
          companyId: 4,
        },
        {
          questionTeory: `Как изменить шрифт элемента в CSS?`,
          companyId: 4,
        },
        {
          questionTeory: `Какое свойство в CSS используется для задания внутреннего отступа элемента?`,
          companyId: 4,
        },
        {
          questionTeory: `Какое ключевое слово используется для объявления переменной, которая может быть изменена?`,
          companyId: 5,
        },
        {
          questionTeory: `Какой метод используется для преобразования строки в число в JavaScript?`,
          companyId: 5,
        },
        {
          questionTeory: `Какой символ используется для доступа к свойствам объекта в JavaScript?`,
          companyId: 5,
        },
        {
          questionTeory: `Какой символ используется для комментирования однострочного комментария в JavaScript?`,
          companyId: 5,
        },
        {
          questionTeory: `Какой метод используется для получения длины строки в JavaScript?`,
          companyId: 5,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TheoryQuestions', null, {});
  },
};
