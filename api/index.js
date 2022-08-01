require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const whitelist = [
    'http://localhost:4001'
]

const usersController = require("./controllers/Users")
const fishController = require('./controllers/Fish')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//     origin: (origin, cb) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             cb(null, true)
//         } else {
//             cb(new Error())
//         }
//     }
// }))

app.use('/users', usersController)
app.use('/fish', fishController)

mongoose.connect(dbURL, () => {
    console.log('connected to fish db')
})
app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
})