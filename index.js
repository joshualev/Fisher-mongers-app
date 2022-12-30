require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBSession = require("connect-mongodb-session");

const usersController = require("./controllers/Users");
const fishController = require("./controllers/Fish");

const app = express();
// const PORT = process.env.PORT;

const dbURL = process.env.MONGODB_URL;
const MongoDBStore = mongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(express.json());
app.use(express.static(__dirname + "/client/build"));

app.use(express.urlencoded({ extended: false }));

app.use("/users", usersController);
app.use("/fish", fishController);
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

mongoose.connect(dbURL, () => {
  console.log("🐟", "connected to fish db", "🐠");
});
// app.listen(PORT, () => {
//   console.log("listening on port: ", PORT);
// });
