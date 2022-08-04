const express=require('express')

const fishRouter = express.Router()
const Fish = require('../models/Fish')


//Index Route
fishRouter.get('/', async (req,res) => {
    try {
        const fishes = await Fish.find({}).exec()
        res.status(200).json(fishes)
    } catch (error) {
        res.status(500).json({ errorMessage: error.Message })
    }
})

//Show Route
fishRouter.get("/:fishID", async (req, res) => {
    const fish = await Fish.findById(req.params.fishID).exec()
    console.log(fish)
    res.status(200).json(fish)
})

// New Route
fishRouter.post("/", async (req, res) => {
    try {
        const newFish = await Fish.create(req.body)
        console.log(newFish)
        res.status(200).json(newFish)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
        console.log("could not create new fish: ", error.message )
    }
})

// Delete Route
fishRouter.delete("/:fishID", async (req, res) => {
    const deleteFish = await Fish.findByIdAndDelete(req.params.fishID).exec()
    console.log("deleted: ", deleteFish)
    res.status(200).send(deleteFish)
})

// Put (edit) Route
fishRouter.put("/:fishID", async (req, res) => {
    const updateFish = await Fish.findByIdAndUpdate(req.params.fishID, req.body, {new: true} ).exec()
    console.log("Updated fish :", updateFish)
    res.status(200).json(updateFish)
})

module.exports = fishRouter