const express=require('express')

const fishRouter = express.Router()
const Fish = require('../models/Fish')


fishRouter.get('/', async (req,res) => {
    try {
        const fishes = await Fish.find({}).exec()
        res.status(200).json(fishes)
    } catch (error) {
        res.status(500).json({ errorMessage: error.Message })
    }
})

module.exports = fishRouter