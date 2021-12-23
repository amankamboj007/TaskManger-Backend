const express = require('express')
const app = express()
const config = require('./config/config')
const initializeRoutes = require('./routes/index')
const { connectMongo } = require('./database/dbconfig')

//middleware for JSON
app.use(express.json())

//CORS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//db connection
connectMongo.then(() => {
    console.log('connected to DB')
}).catch((err) => {
    console.log('not able to connect ')
})

//initalizing the routes 
app.use(config.baseUrl, initializeRoutes)

//Setting Up Server
app.listen(config.port, () => {
    console.log(`Server is up at ${config.port}`)
})