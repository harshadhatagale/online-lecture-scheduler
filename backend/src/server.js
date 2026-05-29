const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://online-lecture-scheduler.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/courses",
  require("./routes/courseRoutes")
);

app.use(
  "/api/batches",
  require("./routes/batchRoutes")
);

app.use(
  "/api/lectures",
  require("./routes/lectureRoutes")
);

app.use(
  "/api/users",
  require("./routes/userRoutes")
);

// Health Check Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT =
      process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });