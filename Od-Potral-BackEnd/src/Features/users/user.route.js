const express = require("express");
const userController = require("./userController");
const userRoute = express.Router();

userRoute.post("/", userController.createUser);
userRoute.get("/", userController.getAllUsers);

userRoute.get("/:id", userController.getUserById);
userRoute.patch("/:id", userController.updateUserById);
userRoute.delete("/:id", userController.deleteUserById);

module.exports = userRoute;
