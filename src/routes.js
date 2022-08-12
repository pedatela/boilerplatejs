const { Router }  = require('express');

const HealthCheckController = require('./app/controllers/HealthCheckController');


const routes = new Router();

routes.get('/healthcheck', HealthCheckController.index);
routes.get('/', HealthCheckController.index);
// Teste

module.exports = routes