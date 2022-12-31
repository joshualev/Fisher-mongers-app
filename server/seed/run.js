require("dotenv").config();

const mongoose = require("mongoose");

const Fish = require("../../models/Fish");
const dummyFish = require("./data.json");

const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL, async () => {
  console.log("Connected to Fish db");

  console.log("Resetting Fish collection");
  await Fish.collection.drop();
  console.log("Fish collection dropped");

  console.log("Inserting seed data");
  const insertedFish = await Fish.insertMany(dummyFish);
  console.log("Dummy Fish inserted");
  console.log(insertedFish);

  mongoose.connection.close();
});
