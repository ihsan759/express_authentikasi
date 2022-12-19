module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("cutomer", {
    nama: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.TEXT("long"),
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Customer;
};
