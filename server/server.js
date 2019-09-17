const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

const Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: "Learn Node.js",
  completed: true,
  completedAt:1200 
});

newTodo.save().then(
  doc => {
    console.log("Save todo", doc);
  },
  e => {
    console.log("Unable to save todo");
  }
);
