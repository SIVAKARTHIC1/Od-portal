const express = require("express");
const ODController = require("./ODController");

const odRoute = express.Router();

odRoute.route("/").get(ODController.getAllODs).post(ODController.createOD);

odRoute
  .route("/:odId")
  .get(ODController.getODById) // Get OD by ID
  .delete(ODController.deleteOD); // Delete OD by ID

odRoute.route("/:odId/approve").patch(ODController.approveOD); // Approve OD

odRoute.route("/:odId/reject").patch(ODController.rejectOD); // Reject OD with reason

module.exports = odRoute;
