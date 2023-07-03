const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user')
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = 8000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


app.get("/", (req, res) => {
    res.send("Welcome to the cerulean lion recipe app!");
});


// Routes
app.use("/api", require("./routes/api"));
app.use("/api/user", userRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
