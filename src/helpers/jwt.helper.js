const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign({ userId: user.id }, "artisticadali", { expiresIn: 60 * 60 });
  return token;
};

module.exports = {
    generateToken
}