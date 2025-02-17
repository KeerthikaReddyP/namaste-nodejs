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

  const data={
    firstname:"Someone",
    lastname:"Something",
    city:"Somewhere"
  }
  // Create/Insert
  const insertResult=await collection.insertMany([data]);
  console.log("Inserted documents => ",insertResult);

  // Update
  const updateResult=await collection.updateMany({firstname:"Someone"},{$set:{firstname:"Someone2"}});
  console.log("Updated documents => ",updateResult);

  // Delete
  const deleteResult=await collection.deleteOne({firstname:"Someone2"});
  console.log("Deleted documents=> ",deleteResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents => ",findResult);

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