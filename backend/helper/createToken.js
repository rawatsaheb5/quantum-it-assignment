const jwt = require("jsonwebtoken");
const createToken = async (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

module.exports = {
  createToken,
};
