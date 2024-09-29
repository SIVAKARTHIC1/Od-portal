const mongoose = require("mongoose");
const AppError = require("../../errors/AppError");

const odSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["internal", "external"],
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value >= new Date();
      },
      message: "From date cannot be in the past",
    },
  },
  toDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value >= this.fromDate;
      },
      message: "To date must be greater than or equal to from date",
    },
  },
  fromTime: {
    type: String,
    required: true,
  },
  toTime: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    // Only required when `odType` is "event"
    required: function() {
      return this.odType === "event";
    },
  },
  odType: {
    type: String,
    enum: ["event", "otherActivity"],
    required: true,
  },
  reason: {
    type: String,
    // Only required when `odType` is "otherActivity"
    required: function() {
      return this.odType === "otherActivity";
    },
  },
  approvalStatus: {
    type: String,
    enum: ["approved", "rejected", "pending"],
    default: "pending",
    required: true,
  },
  rejectedReason: {
    type: String,
  },
  mentorCode: {
    type: String,
    required: true,
  },
});

// Pre-save hook to validate dates
odSchema.pre("save", function (next) {
  if (this.toDate < this.fromDate) {
    return next(
      new AppError("To date must be greater than or equal to from date", 400)
    );
  }
  next();
});

module.exports = mongoose.model("od", odSchema);
