const OD = require("../models/OD");
const catchServiceError = require("../utils/catchServiceError");
const AppError = require("../utils/AppError");
const { getUserById } = require("../users/userService");

const getAllODs = catchServiceError(async () => {
  const ods = await OD.find().populate("student mentor event");
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
//   if (
//     !(await getUserById(odData.student)) ||
//     (await getUserById(odData.mentor))
//   ) {
//     throw new AppError("provide valid student and mentor id", 401);
//   }

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
