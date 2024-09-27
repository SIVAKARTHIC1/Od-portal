const catchControllerError = require("../../errors/AsyncControllerErrorHandler");
const { findUser } = require("./authService");

exports.login = catchControllerError(async (req, res) => {
  const { email } = req.body;
  let { user, token } = await findUser(email);
  console.log(user);
  res.status(200).json({ status: "success", user, token });
});
