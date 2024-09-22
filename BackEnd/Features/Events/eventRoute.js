const express = require("express");
const {
  getEvents,
  postEvent,
  updateEventById,
  getEventById,
  deleteEventById,
} = require("./eventController");

const EventRoute = express.Router();

EventRoute.route("/").get(getEvents).post(postEvent);

EventRoute.route("/:eventId")
  .get(getEventById)
  .patch(updateEventById)
  .delete(deleteEventById);

module.exports = EventRoute;
