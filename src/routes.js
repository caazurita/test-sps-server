const { Router } = require("express");
const sessionMiddleware = require("./middleware/session");
const routes = Router();

const UserController = require("./controllers/user.controller");
const AuthController = require("./controllers/auth.controller");

const userController = new UserController();
const authController = new AuthController();

routes.get("/", (req, res) => {
  res.send("running");
});

routes.post("/login", authController.login);


routes.get("/users", sessionMiddleware, userController.getAll);
routes.get("/users/:id", sessionMiddleware, userController.getOne);
routes.post("/users", sessionMiddleware, userController.create);
routes.put("/users/:id", sessionMiddleware, userController.update);
routes.delete("/users/:id", sessionMiddleware, userController.delete);


module.exports = routes;
