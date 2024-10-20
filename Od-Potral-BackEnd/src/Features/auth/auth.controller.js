const catchControllerError = require("../../errors/AsyncControllerErrorHandler");
const { findUser } = require("./auth.service");

exports.login = catchControllerError(async (req, res) => {
  const { email } = req.body;
  let { user, token } = await findUser(email);
  res.status(200).json({ status: "success", user, token });
});
