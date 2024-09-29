const express = require("express");
const ODController = require("./ODController");

const odRoute = express.Router();

odRoute.route("/").get(ODController.getAllODs).post(ODController.createOD);

odRoute
  .route("/:odId")
  .get(ODController.getODById) 
  .delete(ODController.deleteOD); 

odRoute.route("/:odId/approve").patch(ODController.approveOD); 

odRoute.route("/:odId/reject").patch(ODController.rejectOD); 

module.exports = odRoute;
