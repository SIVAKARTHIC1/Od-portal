const AppError = require("../errors/AppError");
const catchControllerError = require("../errors/AsyncControllerErrorHandler");

exports.isAuthorized = (...authRoles) =>
  catchControllerError(async (req, res, next) => {
    if (!authRoles.includes(req.user.role)) {
      return next(
        new AppError("You are not authorized to access this route", 401)
      );
    }

    next();
  });
