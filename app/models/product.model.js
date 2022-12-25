module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    nama: {
      type: Sequelize.STRING,
    },
    uom: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
  });

  return Product;
};
