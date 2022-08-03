require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require("express-session")
const mongoDBSession = require("connect-mongodb-session")
const cors = require('cors')

const uploadController = require('./controllers/uploads')
const usersController = require("./controllers/Users")
const fishController = require('./controllers/Fish')


const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBStore = mongoDBSession(session)
const sessionStore = new MongoDBStore({
    uri: dbURL,
    collection: "sessions"
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
}))

const whitelist = [
    'http://localhost:4001'
]

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: "*"
}))
    // // Replace above before deploying
    // origin: (origin, cb) => {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         cb(null, true)
    //     } else {
    //         cb(new Error())
    //     }
    // }

app.use('/users', usersController)
app.use('/fish', fishController)
app.use('/upload', uploadController)

mongoose.connect(dbURL, () => {
    console.log('🐟', 'connected to fish db', '🐠')
})
app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
})