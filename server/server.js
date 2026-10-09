require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Inquiry = require("./Inquiry");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Home route
app.get("/", (req, res) => {
  res.send("Frame Academy Backend is Running");
});

// Courses data
const courses = [
  {
    id: 1,
    name: "Photography",
    description:
      "Learn camera basics, lighting, composition, portrait photography and professional editing.",
    duration: "3 Months",
  },
  {
    id: 2,
    name: "Cinematography",
    description:
      "Learn filmmaking, camera movement, lighting, storytelling and cinematic techniques.",
    duration: "4 Months",
  },
];

// GET all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// POST inquiry
app.post("/api/inquiries", async (req, res) => {
  try {
    const { name, phone, course } = req.body;

    // Validation
    if (!name || !phone || !course) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Phone number must be 10 digits",
      });
    }

    // Save inquiry to MongoDB
    const inquiry = await Inquiry.create({
      name,
      phone,
      course,
    });

    res.status(201).json({
      message: "Inquiry submitted successfully",
      inquiry,
    });
  } catch (error) {
    console.log("Inquiry error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});