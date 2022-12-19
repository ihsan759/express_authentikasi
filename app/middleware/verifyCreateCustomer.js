const db = require("../models");
const Customer = db.customer;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Customer.findOne({
    where: {
      username: req.body.username,
    },
  }).then((customer) => {
    if (customer) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    Customer.findOne({
      where: {
        email: req.body.email,
      },
    }).then((customer) => {
      if (customer) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};

const verifyCreateCustomer = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifyCreateCustomer;
