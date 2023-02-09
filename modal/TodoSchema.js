const mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  Create_At: {
    type: Date,
    default: Date.now(),
  },
});

const TodoModel = mongoose.model("todo", todoSchema);
module.exports = TodoModel;
