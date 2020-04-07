const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/galleries', require('./formsController'));
apiControllers.use('/Upload', require('./formsController'));
module.exports = apiControllers;
