const apiRouter = require("express").Router();
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const verifyJWT = require("../middleware/verifyJWT");

// Login Route 
apiRouter.route("/api/login")
.post(AuthController.login)
.get((req,res) => {
  res.status();
})
// Register Route

// For Users Route
apiRouter
  .route("/api/users")
  .get(verifyJWT,UserController.all)
  .post(UserController.store);
  // For User Param Route
apiRouter
  .route("/api/users/:id")
  .get(UserController.get)
  .delete(UserController.romove)

module.exports = apiRouter;
