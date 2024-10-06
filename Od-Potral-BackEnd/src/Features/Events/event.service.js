const EventModel = require("./event.model");
const catchServiceError = require("../../errors/AsyncServiceErrorHandler");
const { eventValidationSchema } = require("./eventValidationSchema");
const AppError = require("../../errors/AppError");

exports.getAllEvents = catchServiceError(async () => {
  const events = await EventModel.find();
  return events;
});

exports.createEvent = catchServiceError(async (data) => {
  const { error, value } = eventValidationSchema.validate(data);

  if (error) {
    const errorMessages = error.details.map((err) => err.message).join(", ");
    throw new AppError(`Validation error: ${errorMessages}`, 400);
  }

  const event = await EventModel.create(value);
  return event;
});

exports.getEventById = catchServiceError(async (eventId) => {
  const event = await EventModel.findById(eventId);
  if (!event) {
    throw new AppError("Event not found", 404);
  }
  return event;
});

exports.updateEventById = catchServiceError(async ({ eventId, eventData }) => {
  const updatedEvent = await EventModel.findByIdAndUpdate(eventId, eventData, {
    new: true,
    runValidators: true,
  });

  if (!updatedEvent) {
    throw new AppError("Event not found or could not be updated", 404);
  }

  return updatedEvent;
});

exports.deleteEventById = catchServiceError(async (eventId) => {
  const deletedEvent = await EventModel.findByIdAndDelete(eventId);
  return deletedEvent;
});
