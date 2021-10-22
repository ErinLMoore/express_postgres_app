"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Teams",
      [
        {
          fullName: "Point Pleasant Mothmen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Cleveland Baltos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Dayton Normals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "North Linden Cool Beans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
