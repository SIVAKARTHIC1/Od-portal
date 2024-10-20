const OD = require("./OD.model");
const catchServiceError = require("../../errors/AsyncServiceErrorHandler");
const AppError = require("../../errors/AppError");
const userModel = require("../users/user.model");
const eventModel = require("../Events/event.model");
// const { getUserById } = require("../users/userService");

const getAllODs = catchServiceError(async () => {
  const ods = await OD.find().populate("student").populate("mentor").populate({
    path: "event",
    select: "name",
  });
  return ods;
});

const getODById = catchServiceError(async (id) => {
  const od = await OD.findById(id).populate("student mentor event");
  if (!od) {
    throw new AppError("OD not found", 404);
  }
  return od;
});

const createOD = catchServiceError(async (odData) => {
  if (
    odData.odType == "event" &&
    !(await eventModel.exists({ _id: odData.event }))
  ) {
    throw new AppError("Event does not exist", 400);
  }
  const overlapFilter = {
    $or: [{ student: odData.student }, { mentor: odData.mentor }],
    $and: [
      { toDate: { $gte: odData.fromDate } },
      { fromDate: { $lte: odData.toDate } },
    ],
  };

  const existingOD = await OD.findOne(overlapFilter);

  if (existingOD) {
    throw new AppError("An OD already exists within the given date range", 400);
  }

  const od = await OD.create(odData);
  return od;
});

const deleteOD = catchServiceError(async (id) => {
  const od = await OD.findByIdAndDelete(id);
  if (!od) {
    throw new AppError("OD not found", 404);
  }
});

const approveOD = catchServiceError(async (id) => {
  const od = await OD.findById(id);
  if (!od) {
    throw new AppError("OD not found", 404);
  }
  if (od.approvalStatus !== "pending") {
    throw new AppError("OD is already processed", 400);
  }
  od.approvalStatus = "approved";
  await od.save();
  return od;
});

const rejectOD = catchServiceError(async ({ id, reason }) => {
  const od = await OD.findById(id);
  if (!od) {
    throw new AppError("OD not found", 404);
  }
  if (od.approvalStatus !== "pending") {
    throw new AppError("OD is already processed", 400);
  }
  if (!reason) {
    throw new AppError("Rejection reason is required", 400);
  }
  od.approvalStatus = "rejected";
  od.rejectedReason = reason;
  await od.save();
  return od;
});

module.exports = {
  getAllODs,
  getODById,
  deleteOD,
  approveOD,
  rejectOD,
  createOD,
};
