const ODService = require("./OD.service");
const catchControllerError = require("../../errors/AsyncControllerErrorHandler");
const AppError = require("../../errors/AppError");

const getAllODs = catchControllerError(async (req, res, next) => {
  const ods = await ODService.getAllODs();
  res.status(200).json({
    status: "success",
    result:ods.length,
    data: ods,
  });
});

const getODById = catchControllerError(async (req, res, next) => {
  const od = await ODService.getODById(req.params.odId);
  res.status(200).json({
    status: "success",
    data: od,
  });
});

const createOD = catchControllerError(async (req, res, next) => {
  const odData = req.body;

  if (
    !odData.student ||
    !odData.mentor ||
    !odData.type ||
    !odData.fromDate ||
    !odData.toDate ||
    !odData.fromTime ||
    !odData.toTime ||
    (odData.odType === "event" && !odData.event) ||
    (odData.odType === "otherActivity" && !odData.reason)
  ) {
    throw new AppError("All required fields must be filled", 400);
  }

  const newOD = await ODService.createOD(odData);

  res.status(201).json({
    status: "success",
    data: newOD,
  });
});

const deleteOD = catchControllerError(async (req, res, next) => {
  await ODService.deleteOD(req.params.odId);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

const approveOD = catchControllerError(async (req, res, next) => {
  const od = await ODService.approveOD(req.params.odId);
  res.status(200).json({
    status: "success",
    data: od,
  });
});

const rejectOD = catchControllerError(async (req, res, next) => {
  const { rejectedReason } = req.body;
  console.log(rejectedReason)
  const od = await ODService.rejectOD({ id: req.params.odId, reason:rejectedReason });
  res.status(200).json({
    status: "success",
    data: od,
  });
});

module.exports = {
  getAllODs,
  getODById,
  deleteOD,
  approveOD,
  rejectOD,
  createOD,
};
