const express = require("express")
const bcrypt = require("bcrypt")

const User = require("../models/Users")

const userRouter = express.Router()

// GET / route
// Remember to DROP your users db on mongoDB :)
userRouter.get("/", async (req, res) => {
  try {
    const user = await User.find(req.body).exec()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({errorMessage: error.Message})
  }
})

// POST / route (New user)
// (You will need bcrypt package)
userRouter.post("/", async (req, res) => {

  // // Uncomment hashing before deploying!
  // req.body.password = bcrypt.hashSync(
  //   req.body.password,
  //   bcrypt.genSaltSync()
  // )

  try {
    const res = await User.create(req.body)
    const user = res.json()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message })
  }
})

module.exports = userRouter
