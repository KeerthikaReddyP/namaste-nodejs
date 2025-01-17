const { MongoClient } = require("mongodb");

//Connection string
const URI =
  "mongodb+srv://keerthikareddy267:S8MUnIUbV9cX9V6L@nodebykeer.oxcbl.mongodb.net/";

const client = new MongoClient(URI);

//Our DB name
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());





// Go to mongodb website
// Create a free cluster
// Create a user
// Get the connection string
// Install mongo db compass
// Create your database & Add data

// Install mongodb package from npm
// create connection from code
// CRUD Operations