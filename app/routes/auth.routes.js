const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const controllerCustomer = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  // User
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

  app.post("/api/auth/signin", controller.signin);

  // Customer
  app.post("/api/auth/customer/signin", controller.signinCustomer);
};
