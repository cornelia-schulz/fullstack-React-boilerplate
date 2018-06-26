const path = require('path')
const express = require('express')

const catRoutes = require('./routes/cats')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/cats', catRoutes)

module.exports = server