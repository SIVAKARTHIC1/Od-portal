const express = require("express");
const userController = require("./user.controller");
const { isAuthenticated } = require("../../middlewares/Authentication");
const userRoute = express.Router();


userRoute.use(isAuthenticated);
userRoute.post("/", userController.createUser);
userRoute.get("/", userController.getAllUsers);

userRoute.get("/:id", userController.getUserById);
userRoute.patch("/:id", userController.updateUserById);
userRoute.delete("/:id", userController.deleteUserById);

module.exports = userRoute;
