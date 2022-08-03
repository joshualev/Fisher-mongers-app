const express = require("express")

const uploadRouter = express.Router()

const upload = require("../middlewares/upload")

uploadRouter.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file)
  res.status(200).json({
    msg: "form submission success"
  })
})

module.exports = uploadRouter