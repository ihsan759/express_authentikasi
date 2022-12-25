const { authJwt } = require("../middleware");
const controller = require("../controllers/order.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/order/create/:id", [authJwt.verifyTokenCustomer], controller.createOrder);

  app.put("/api/order/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.updateOrder);

  app.get("/api/order/:id", [authJwt.verifyTokenCustomer], controller.showOrder);

  app.get("/api/order", [authJwt.verifyTokenCustomer], controller.showAllOrder);

  app.delete("/api/order/:id", [authJwt.verifyTokenCustomer], controller.deleteOrder);
};
