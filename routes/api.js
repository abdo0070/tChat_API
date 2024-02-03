const apiRouter = require("express").Router();
const AuthController = require("../controllers/AuthController");
const FreindContoller = require("../controllers/FreindsController");
const UserController = require("../controllers/UserController");
const verifyJWT = require("../middleware/verifyJWT");

// Login Route 
apiRouter.route("/api/login")
.post(AuthController.login)
// Register Route
apiRouter.route("/api/register")
.post(AuthController.register)
// For Users Route
apiRouter
  .route("/api/users")
  .get(verifyJWT,UserController.all)
  .post(UserController.store);
  // For User Param Route
apiRouter
  .route("/api/users/:id")
  .get(UserController.get)

// Freinds Route 
apiRouter.route("/api/freinds")
.post(verifyJWT,FreindContoller.addFreind)

apiRouter.route("/api/freinds")
.get(verifyJWT,FreindContoller.freindList)

// search
apiRouter.route("/api/search/:user_name")
.get(verifyJWT,UserController.getByUserName);


module.exports = apiRouter;