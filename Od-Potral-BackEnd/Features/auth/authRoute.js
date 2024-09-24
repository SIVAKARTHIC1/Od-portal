const express = require("express");
const { login } = require("./authController");

const authRoute = express.Router();

authRoute.post("/login", login);

module.exports = authRoute;