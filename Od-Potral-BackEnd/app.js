const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const EventRoute = require("./Features/Events/eventRoute");
const userRoute = require("./Features/users/userRoute");
const AppError = require("./errors/AppError");
const ErrorController = require("./errors/ErrorController");
const authRoute = require("./Features/auth/authRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/events", EventRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

app.use("*", (req, res, next) => {
  next(new AppError("wrong endpoint", 404));
});

app.use(ErrorController);

module.exports = app;
