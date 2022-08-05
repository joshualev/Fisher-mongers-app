const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true }
})

const Users = mongoose.model("Users", userSchema)

module.exports = Users
