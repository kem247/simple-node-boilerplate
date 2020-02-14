"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reservations", [
      {
        name: "John Cena",
        slot: new Date("21 Feb 2020 17:00:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 1
      },
      {
        name: "Not John Cena",
        slot: new Date("21 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 2
      },
      queryInterface.bulkDelete("Table", [
        {
          id: 1,
          name: 1,
          table: 1
        },
        { id: 2, name: 2, table: 2 }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  }
};
