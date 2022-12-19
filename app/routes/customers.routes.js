const { verifyCreateCustomer, authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/customer/create", [verifyCreateCustomer.checkDuplicateUsernameOrEmail, authJwt.verifyToken, authJwt.isAdmin], controller.createCustomer);

  app.put("/api/customer/:id", [authJwt.verifyToken, authJwt.isAdmin, authJwt.verifyToken, authJwt.isAdmin], controller.updateCustomer);

  app.delete("/api/customer/:id", [authJwt.verifyToken, authJwt.isAdmin, authJwt.verifyToken, authJwt.isAdmin], controller.deleteCustomer);
};
