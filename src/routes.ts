const route = require('express').Router();
const resultsController = require('./controllers/resultsController')
const userController = require('./controllers/userController')

route.get('/allresults', resultsController.show)
route.post('/newresult', resultsController.create)
route.post('/newuser', userController.create)

module.exports = route