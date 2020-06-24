const express = require('express');

const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');
const SessionController= require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

module.exports = routes;