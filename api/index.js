const Router = require('express').Router();
const connection = require('./db_conn');

require('./flights.api.js')(Router, connection);
require('./hangers.api.js')(Router, connection);
require('./airports.api.js')(Router, connection);
require('./auth.api.js')(Router, connection);

module.exports = Router;