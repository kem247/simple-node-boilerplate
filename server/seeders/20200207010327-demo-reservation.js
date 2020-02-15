"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reservations", [
      {
        name: "John Cena",
        slot: new Date("14 Feb 2020 17:00:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 1
      },
      {
        name: "Not John Cena",
        slot: new Date("15 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 2
      },
      {
        name: "Not John Cena",
        slot: new Date("16 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 3
      },
      {
        name: "Not John Cena",
        slot: new Date("17 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 3
      },
      {
        name: "Not John Cena",
        slot: new Date("18 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 3
      },
      {
        name: "Not John Cena",
        slot: new Date("19 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 3
      },
      {
        name: "Not John Cena",
        slot: new Date("18 Feb 2020 18:30:00 GMT-0500"),
        createdAt: new Date(),
        updatedAt: new Date(),
        table: 3
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  }
};
