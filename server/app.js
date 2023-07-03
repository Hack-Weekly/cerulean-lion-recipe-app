const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 8000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


app.get("/", (req, res) => {
    res.send("Welcome to the cerulean lion recipe app!");
});


// Routes
app.use("/api", require("./routes/api"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
