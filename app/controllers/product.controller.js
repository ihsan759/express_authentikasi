const db = require("../models");
const Product = db.product;

exports.createProduct = (req, res) => {
  // Save Product to Database
  Product.create({
    nama: req.body.nama,
    uom: req.body.uom,
    stock: req.body.stock,
    harga: req.body.harga,
  })
    .then(() => {
      res.send({ message: "Product was created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateProduct = async (req, res) => {
  const id = await req.params.id;
  Product.update(
    {
      nama: req.body.nama,
      uom: req.body.alamat,
      stock: req.body.username,
      harga: req.body.email,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.send({ message: "Product was updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteProduct = async (req, res) => {
  const id = await req.params.id;

  Product.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send({ message: "Product was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.showProduct = async (req, res) => {
  const id = await req.params.id;

  Product.findOne({
    where: {
      id: id,
    },
  }).then((product) => {
    res.send({
      message: "Data Product Available",
      data: product,
    });
  });
};

exports.showAllProduct = (req, res) => {
  Product.findAll().then((product) => {
    res.send({
      message: "Data Product Available",
      data: product,
    });
  });
};
