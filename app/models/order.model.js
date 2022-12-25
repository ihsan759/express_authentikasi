module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    tanggal_order: {
      type: Sequelize.DATEONLY,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Order;
};
