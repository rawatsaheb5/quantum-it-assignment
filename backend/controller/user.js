const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { createToken } = require("../helper/createToken");

const register = async (req, res) => {
  const { name, email, password, dateOfBirth } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
    });

    await newUser.save();

    const token = await createToken(newUser._id);

    return res.status(201).json({
      user: {
        name: newUser.name,
        email: newUser.email,
        dateOfBirth: newUser.dateOfBirth,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await createToken(user._id);

    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
};
