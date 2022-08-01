const express = require("express")
const bcrypt = require("bcrypt")

const User = require("../models/Users")

const userRouter = express.Router()

// localhost:4000/users/signup
// Remember to DROP your users db on mongoDB :)
userRouter.get("/signup", async (req, res) => {
  try {
    const users = await User.find({}).exec()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({errorMessage: error.Message})
  }
})

module.exports = userRouter
