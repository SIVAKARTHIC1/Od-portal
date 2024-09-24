const AppError = require("../../errors/AppError");
const { createToken } = require("../../utlis/jwtProvider");
const User = require("../users/userModel");

exports.findUser = async (email) => {
    console.log(email)
  let user = await User.findOne({ email });
  console.log(user)
  if (!user) {
    throw new AppError("Invalid EmailId", 401);
  }
  const token = createToken(user._id);
  return { user, token };
};
