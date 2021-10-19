const express = require('express');
const app = express();
const controllers = require("../controller/cliente");

module.exports = (app) => {
    
    app.get('/api', (req, res) => res.status(200).send ({
         message: 'Example project did not give you access to the api web services',
    }));
    app.post('/cliente', controllers.create);
    app.get('/cliente', controllers.list);
    app.get('/cliente/:id', controllers.findById);
    app.get('/cliente/nombre/:nombre', controllers.findByName);
    app.delete('/cliente/:id', controllers.deleteById);
    app.put('/cliente', controllers.update);

 };
 
