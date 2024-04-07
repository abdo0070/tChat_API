const apiRouter = require("express").Router();
const AuthController = require("../controllers/AuthController");
const FreindContoller = require("../controllers/ChatController");
const MessageController = require("../controllers/MessageController");
const RoomController = require("../controllers/RoomController");
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

// Chat Route 
apiRouter.route("/api/chats")
.post(verifyJWT,FreindContoller.getChat)

apiRouter.route("/api/freinds")
.get(verifyJWT,FreindContoller.freindList)

// search
apiRouter.route("/api/search/:user_name")
.get(verifyJWT,UserController.getByUserName);

// Message
apiRouter.route("/api/messages")
.post(MessageController.addMessage)

apiRouter.route("/api/messages/:room_id")
.get(MessageController.loadMessages)

module.exports = apiRouter;