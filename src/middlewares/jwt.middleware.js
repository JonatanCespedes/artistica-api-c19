const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  jwt.verify(token, "artisticadali", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;