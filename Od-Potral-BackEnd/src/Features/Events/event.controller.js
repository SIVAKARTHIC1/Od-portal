const EventService = require("./event.service");
const catchControllerError = require("../../errors/AsyncControllerErrorHandler");

exports.getEvents = catchControllerError(async (req, res, next) => {
  const events = await EventService.getAllEvents();
  res.status(200).json({
    status: "success",
    results: events.length,
    data: events,
  });
});

exports.postEvent = catchControllerError(async (req, res, next) => {
  const event = await EventService.createEvent(req.body);
  res.status(201).json({
    status: "success",
    data: event,
  });
});

exports.getEventById = catchControllerError(async (req, res, next) => {
  const event = await EventService.getEventById(req.params.eventId);

  res.status(200).json({
    status: "success",
    data: event,
  });
});

exports.updateEventById = catchControllerError(async (req, res, next) => {

  const updatedEvent = await EventService.updateEventById({
    eventId: req.params.eventId,
    eventData: req.body,
  });

  res.status(200).json({
    status: "success",
    data: updatedEvent,
  });
});

exports.deleteEventById = catchControllerError(async (req, res, next) => {
  await EventService.deleteEventById(req.params.eventId);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
