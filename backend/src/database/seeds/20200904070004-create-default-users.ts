import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Administrador",
          email: "admin@whaticket.com",
          passwordHash: "$2a$08$EddKb3OAe1BLXXGQmzDaHOcQv/B7e1mk2/Rn4S9dTuGZcEQPgFmja", //password 123456
          profile: "admin",
          tokenVersion: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
