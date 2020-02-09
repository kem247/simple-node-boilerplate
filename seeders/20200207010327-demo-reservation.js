"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reservations", [
      {
        name: "John Cena",
        slot: new Date("21 Feb 2020 17:00:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Not John Cena",
        slot: new Date("21 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      queryInterface.bulkDelete("Table", [
        {
          id: 1,
          name: 1
        },
        { id: 2, name: 2 }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  }
};
