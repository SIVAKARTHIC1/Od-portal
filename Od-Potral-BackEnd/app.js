const express = require("express");
const morgan = require("morgan");
const EventRoute = require("./Features/Events/eventRoute");
const AppError = require("./errors/AppError");
const ErrorController = require("./errors/ErrorController");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/events", EventRoute);

app.use("*", (req, res, next) => {
  next(new AppError("wrong endpoint", 404));
});

app.use(ErrorController);

module.exports = app;
