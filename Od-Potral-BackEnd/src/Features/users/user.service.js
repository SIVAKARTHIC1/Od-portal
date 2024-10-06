const User = require("./user.model");
const catchServiceError = require("../../errors/AsyncServiceErrorHandler");
const userValidation = require("./userValidationSchema");

exports.createUser = catchServiceError(async (userData) => {
  const { error, value } = userValidation.validate(userData);
  console.log(value);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  const user = new User(value);
  return await user.save();
});

exports.getAllUsers = catchServiceError(async () => {
  return await User.find();
});

exports.getUserById = catchServiceError(async (id) => {
  return await User.findById(id);
});

exports.updateUserById = catchServiceError(async ({ id, updatedData }) => {
  return await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
});

exports.deleteUserById = catchServiceError(async (id) => {
  return await User.findByIdAndDelete(id);
});
