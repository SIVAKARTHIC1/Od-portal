const express = require("express");
const ODController = require("./OD.controller");
const { isAuthenticated } = require("../../middlewares/Authentication");

const odRoute = express.Router();

odRoute
  .route("/")
  .get(ODController.getAllODs)
  .post(isAuthenticated, ODController.createOD);

odRoute
  .route("/:odId")
  .get(ODController.getODById)
  .delete(ODController.deleteOD);

odRoute.route("/:odId/approve").patch(ODController.approveOD);

odRoute.route("/:odId/reject").patch(ODController.rejectOD);

module.exports = odRoute;
