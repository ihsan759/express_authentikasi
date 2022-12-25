const db = require("../models");
const Customer = db.customer;

var bcrypt = require("bcryptjs");

exports.createCustomer = (req, res) => {
  // Save Customer to Database
  Customer.create({
    nama: req.body.nama,
    alamat: req.body.alamat,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    userId: req.body.userId,
  })
    .then(() => {
      res.send({ message: "Customer was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateCustomer = async (req, res) => {
  const id = await req.params.id;
  Customer.update(
    {
      nama: req.body.nama,
      alamat: req.body.alamat,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.send({ message: "Customer was updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteCustomer = async (req, res) => {
  const id = await req.params.id;

  Customer.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send({ message: "Customer was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.showCustomer = async (req, res) => {
  const id = await req.params.id;

  Customer.findOne({
    where: {
      id: id,
    },
  }).then((customer) => {
    res.send({
      message: "Data Customer Available",
      data: customer,
    });
  });
};

exports.showAllCustomer = (req, res) => {
  Customer.findAll().then((customer) => {
    res.send({
      message: "Data Customer Available",
      data: customer,
    });
  });
};
