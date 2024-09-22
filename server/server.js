const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { readdirSync } = require('fs')

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())

//Routes

// #1
app.use('/', require('./routes/api'))
//app.use('/api', require('./routes/api'))

// #2
readdirSync('./routes')
.map((r) => app.use('/api', require('./routes/' + r)))

const port = '5001'
app.listen(port, () => {
    console.log('server started at ' + port)
})