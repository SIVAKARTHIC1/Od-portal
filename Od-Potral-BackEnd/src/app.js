const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet=require("helmet");

const AppError = require("./errors/AppError");
const ErrorController = require("./errors/Error.controller");

const EventRoute = require("./Features/Events/event.route");
const userRoute = require("./Features/users/user.route");
const authRoute = require("./Features/auth/auth.route");
const odRoute = require("./Features/OD/OD.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/v1/events", EventRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/od", odRoute);

app.use("*", (req, res, next) => {
  next(new AppError("wrong endpoint", 404));
});

app.use(ErrorController);

module.exports = app;
