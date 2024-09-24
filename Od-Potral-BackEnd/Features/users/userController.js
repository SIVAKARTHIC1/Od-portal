const userService = require("./userService");
const catchControllerError = require("../../errors/AsyncControllerErrorHandler");

// Create a new user
exports.createUser = catchControllerError(async (req, res) => {
  const data = req.body;
  const user = await userService.createUser(data);
  res.status(201).json({
    status: "success",
    data: user,
  });
});

// Get all users
exports.getAllUsers = catchControllerError(async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
});

// Get a user by ID
exports.getUserById = catchControllerError(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: user,
  });
});

// Update a user by ID
exports.updateUserById = catchControllerError(async (req, res) => {
  const updatedUser = await userService.updateUserById({
    id: req.params.id,
    updatedData: req.body,
  });
  if (!updatedUser) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

// Delete a user by ID
exports.deleteUserById = catchControllerError(async (req, res) => {
  const deletedUser = await userService.deleteUserById(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
  res.status(204).json({
    status: "success",
    message: "User deleted successfully",
    data: null,
  });
});
