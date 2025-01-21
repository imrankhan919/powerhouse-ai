const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// DB CONNECTION
connectDB();

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get("/", (req, res) => {
  res.json({
    message: "WELCOME TO POWERHOUSE API 1.0",
  });
});

// User Routes
app.use("/api/user", require("./routes/user/userRoutes"));

// Plan Routes
app.use("/api/plan", require("./routes/plan/planRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/admin/adminRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.white.bgBlue)
);
