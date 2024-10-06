const express = require("express");
const userController = require("./user.controller");
const { isAuthenticated } = require("../../middlewares/Authentication");
const userRoute = express.Router();

userRoute.post("/", userController.createUser);
userRoute.get("/", isAuthenticated, userController.getAllUsers);

userRoute.get("/:id", userController.getUserById);
userRoute.patch("/:id", userController.updateUserById);
userRoute.delete("/:id", userController.deleteUserById);

module.exports = userRoute;
