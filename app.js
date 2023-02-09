const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors()); //Allow Cross_Origin.
app.use(express.json()); // Allow Req.Body_Parser.
app.use(router); // For All Routes

const DBURI =
  "mongodb+srv://admin:23456789@cluster0.nkiwq0g.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DBURI)
  .then(() => {
    app.listen(PORT, console.log(`server Runing on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
