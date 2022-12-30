const express = require("express");

const fishRouter = express.Router();
const upload = require("../middlewares/upload");
const Fish = require("../models/Fish");

//Index Route
fishRouter.get("/", async (req, res) => {
  try {
    const fishes = await Fish.find({}).exec();
    res.status(200).json(fishes);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
});

//Show Route
fishRouter.get("/:fishID", async (req, res) => {
  const fish = await Fish.findById(req.params.fishID).exec();
  console.log(fish);
  res.status(200).json(fish);
});

// New Route
fishRouter.post("/", upload.single("image"), async (req, res) => {
  try {
    if (req.file) {
      req.body.imageURL = req.file.path;
    }
    console.log(req.file);
    const newFish = await Fish.create(req.body);
    console.log(newFish);
    res.status(200).json(newFish);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    console.log("could not create new fish: ", error.message);
  }
});

// Delete Route
fishRouter.delete("/:fishID", async (req, res) => {
  const deleteFish = await Fish.findByIdAndDelete(req.params.fishID).exec();
  console.log("deleted: ", deleteFish);
  res.status(200).send(deleteFish);
});

// Put (edit) Route
fishRouter.put("/:fishID", upload.single("image"), async (req, res) => {
  try {
    if (req.file) {
      req.body.imageURL = req.file.path;
    }
    console.log(req.file);
    const updateFish = await Fish.findByIdAndUpdate(
      req.params.fishID,
      req.body,
      { new: true }
    ).exec();
    console.log("Updated fish :", updateFish);
    res.status(200).json(updateFish);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    console.log("could not update fish: ", error.message);
  }
});

module.exports = fishRouter;
