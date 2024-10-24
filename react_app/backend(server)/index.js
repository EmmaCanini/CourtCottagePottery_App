    const express = require('express')
    const cors = require('cors')
    const bodyParser = require ('body-parser')
    const router = require('./routes/router')
    const mongoose = require('mongoose')
    require('dotenv/config')

    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))

    const corsOptions= {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200
    }
    app.use(cors(corsOptions))
    app.use('/', router)

    const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
    mongoose.connect(process.env.DB_URI) // set up in .env file with connection string
    .then(() => console.log('DB connected!'))
    .catch(err => console.log('error connecting to DB!'))



    const port = process.env.PORT || 4000 // makes app use the environment or port 4000
    const server = app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })