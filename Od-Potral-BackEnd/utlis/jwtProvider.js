const jwt = require("jsonwebtoken");

exports.createToken = (id) => {
  const token = jwt.sign({ id }, "this is my secret string");
  return token;
};

exports.decodeToken = (token) => {
  const jwtObj = jwt.verify(token, "this is my secret string");
  return jwtObj;
};
