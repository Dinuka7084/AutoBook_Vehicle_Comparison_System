

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const MongoDB_URL = import.meta.env.MongoDB_URL

const app = express();
const router = require("./Routes/VCRoute");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Set up Multer for file upload handling
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: fileStorage });

// Routes Middleware
app.use("/Vehicles", router);   // "/Vehicles" - this is route path (http://localhost:5000/Vehicles)

// Connect to database
mongoose
  .connect(MongoDB_URL)
  .then(() => console.log("Connected to mongoDB"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.log(err));
