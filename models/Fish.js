const mongoose = require("mongoose")

const fishSchema = mongoose.Schema({
  species: { type: String, required: true },
  description: { type: String, default: "A tasty fish" },
  imageURL: { type: String, default: "https://loremflickr.com/300/300/fish" },
  price: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  caughtBy: { type: String, default: "Unknown" }
})

const Fish = mongoose.model("Fish", fishSchema)

module.exports = Fish
