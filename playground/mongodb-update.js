// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  db.collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectId("5d7f88aa6558c62058f91c07")
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(results => {
      console.log(results);
    });
});

// ObjectId("5d7f88aa6558c62058f91c07");
