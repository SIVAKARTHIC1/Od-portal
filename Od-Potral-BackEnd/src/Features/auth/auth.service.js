const AppError = require("../../errors/AppError");
const { createToken } = require("../../utlis/jwtProvider");
const User = require("../users/user.model");

exports.findUser = async (email) => {
  let user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Invalid EmailId", 401);
  }
  const token = createToken(user._id);
  return { user, token };
};
