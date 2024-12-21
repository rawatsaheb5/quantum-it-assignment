const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./route/user");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
