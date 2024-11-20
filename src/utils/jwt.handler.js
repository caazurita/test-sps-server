const doteenv = require("dotenv");
doteenv.config();

const { sign, verify } = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const generateJWT = async (id, expiresIn) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn,
  });
  return jwt;
};

const verifyJWT = async (jwt) => {
  const decoded = verify(jwt, JWT_SECRET);
  return decoded;
};

module.exports = { generateJWT, verifyJWT };
