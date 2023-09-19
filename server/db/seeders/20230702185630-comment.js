

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Comments', [
    {
     body: 'ffffff',
     postId: 1,
     userId: 1
     },
     {
      body: 'ffffff',
      postId: 1,
      userId: 1
      },
      {
      body: 'ffffff',
      postId: 2,
      userId: 1
      },
      {
      body: 'ffffff',
      postId: 2,
      userId: 1
      },
      {
      body: 'ffffff',
      postId: 3,
      userId: 2
      },
      {
      body: 'ffffff',
      postId: 3,
      userId: 2
      },
      {
      body: 'ffffff',
      postId: 4,
      userId: 3
      },
      {
      body: 'ffffff',
      postId: 4,
      userId: 3,
      },
      {
      body: 'ffffff',
      postId: 5,
      userId: 4
      },
      {
        body: 'ffffff',
        postId: 6,
        userId: 4
        },
        {
        body: 'ffffff',
        postId: 7,
        userId: 5
        },
        {
          body: 'ffffff',
          postId: 8,
          userId: 5
          },
          {
        body: 'ffffff',
        postId: 8,
        userId: 5
        },
        {
          body: 'ffffff',
          postId: 8,
          userId: 4
          },
    ], {})
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Comments', null, {});
    
  }
};
