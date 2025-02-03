require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected to Atlas"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


// MongoDB Atlas Connection
mongoose.connect("mongodb+srv://anshsingh01227:LxdLVqcBz65palAn@cluster0.ggxss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected to Atlas"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Define Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

// Handle Contact Form Submission (Store in MongoDB)
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(200).json({ success: true, message: "Message stored successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving message." });
  }
});

// Get all messages (optional API for testing)
app.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching messages." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:`));

