'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('users', [{
            name: 'John Doe',
            email: 'john@example',
            password: 'password',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down (queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('users', null, {});
    }
};
