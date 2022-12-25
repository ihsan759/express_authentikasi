const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const Order = db.order;

exports.createOrder = async (req, res) => {
  // Save Order to Database
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, config.secret);
  const id = await req.params.id;
  Order.create({
    tanggal_order: req.body.tanggal_order,
    status: true,
    productId: id,
    customerId: decoded.id,
  })
    .then(() => {
      res.send({ message: "Order was created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateOrder = async (req, res) => {
  const id = await req.params.id;
  Order.update(
    {
      tanggal_order: req.body.tanggal_order,
      status: req.body.status,
      productId: req.body.id,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.send({ message: "Order was updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOrder = async (req, res) => {
  const id = await req.params.id;

  Order.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send({ message: "Order was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.showOrder = async (req, res) => {
  const id = await req.params.id;

  Order.findOne({
    where: {
      id: id,
    },
  }).then((order) => {
    res.send({
      message: "Data Order Available",
      data: order,
    });
  });
};

exports.showAllOrder = (req, res) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, config.secret);
  Order.findAll({
    where: {
      customerId: decoded.id,
    },
  }).then((order) => {
    res.send({
      message: "Data Order Available",
      data: order,
    });
  });
};
