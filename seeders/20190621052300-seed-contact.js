'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{
      firstName: 'Carlos',
      lastName: 'Martínez',
      phone: '222 222 2222',
      email: 'carlosmart7104@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      firstName: 'Daniel',
      lastName: 'Martínez',
      phone: '333 333 3333',
      email: 'dan24diaz@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
