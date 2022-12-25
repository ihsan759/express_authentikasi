const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/product/create", [authJwt.verifyToken, authJwt.isAdmin], controller.createProduct);

  app.put("/api/product/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.updateProduct);

  app.get("/api/product/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.showProduct);

  app.get("/api/product", [authJwt.verifyToken, authJwt.isAdmin], controller.showAllProduct);

  app.delete("/api/product/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteProduct);
};
