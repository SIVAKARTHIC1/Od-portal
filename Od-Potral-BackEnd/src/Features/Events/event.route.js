const express = require("express");
const {
  getEvents,
  postEvent,
  updateEventById,
  getEventById,
  deleteEventById,
} = require("./event.controller");

const EventRoute = express.Router();

EventRoute.route("/").get(getEvents).post(postEvent);

EventRoute.route("/:eventId")
  .get(getEventById)
  .patch(updateEventById)
  .delete(deleteEventById);

module.exports = EventRoute;
