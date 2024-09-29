const AppError = require("../errors/AppError");
const userModel = require("../Features/users/userModel");
const catchControllerError = require("../errors/AsyncControllerErrorHandler");
const { decodeToken } = require("../utlis/jwtProvider");

exports.isAuthenticated = catchControllerError(async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.split(" ")[1]) {
      return next(new AppError("Please provide authorization token", 400));
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = decodeToken(token);
  
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return next(new AppError("No user found", 404));
    }
  
    req.user = user;
    next();
  });
  