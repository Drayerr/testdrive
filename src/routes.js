const express = require('express')
const crypto = require('crypto')

const UserController = require('./controllers/UserController')
const SgqController = require('./controllers/SgqController')

const routes = express.Router()

routes.get('/users', UserController.list)
routes.post('/users', UserController.create)

routes.get('/sgqs', SgqController.list)
routes.post('/sgqs', SgqController.create)

module.exports = (routes) 