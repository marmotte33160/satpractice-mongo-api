const express = require ('express')//import express
const cors = require ('cors') //import cors
require('dotenv/config')
const mongoose = require ('mongoose')// import mongoose

const app = express()
app.use(express.json()) 
   app.use(cors())

   mongoose
   .connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false

   })

   .then(() => app.listen(5000, (req, res) => {
    console.log('Huston were connected')

   }))
    
   .catch(err => console.log(err))

const countryRoute = require('./src/routes/countryRoute')
app.use(countryRoute)