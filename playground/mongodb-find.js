// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  client.collection("Todos")
    .find()
    .toArray()
    .then(
      docs => {
        console.log("Todo");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch todos", err);
      }
    );

//   client.close();
});
