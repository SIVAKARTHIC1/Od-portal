const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Event name is required"],
    minlength: [3, "Event name must be at least 3 characters long"],
    maxlength: [100, "Event name must be less than 100 characters"],
  },
  fromDate: {
    type: Date,
    required: [true, "Start date is required"],
    validate: [
      {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Start date must be greater than today",
      },
      {
        validator: function (value) {
          return this.toDate ? value <= this.toDate : true;
        },
        message: "Start date must be before or equal to the end date",
      },
    ],
  },
  toDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  organiser: {
    type: String,
    required: [true, "Organiser name is required"],
    minlength: [3, "Organiser name must be at least 3 characters long"],
    maxlength: [100, "Organiser name must be less than 100 characters"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minlength: [3, "Location must be at least 3 characters long"],
    maxlength: [200, "Location must be less than 200 characters"],
  },
});

module.exports = mongoose.model("Event", EventSchema);
