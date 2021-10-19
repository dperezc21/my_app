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
 
/*
const express = require('express');
const route = express.Router();
const controllers = require("../controller/cliente");

route.get('/cliente', (req, res) => {
    controllers.consultar(req, res);
});

route.get('/cliente/:id', (req, res) => {
    controllers.consultarCliente(req, res);
});

route.put('/cliente', (req, res) => {
    controllers.actualizar(req, res);
});

route.post('/cliente', (req, res) => {
    controllers.insertar(req, res);
});

route.delete('/cliente/:id', (req, res) => {
    controllers.eliminar(req, res);
});

/*
route.post('/cliente/:id/:nombre/:apellido/:edad', (req, res) => {
    const {id,nombre, apellido, edad} = req.params;
    const query = "INSERT INTO cliente (id, nombre, apellido, edad) VALUES (?,?,?,?)";
    mysqlConnection.query(query, [id,nombre, apellido, edad], (err, rows, fields) => {
        if (err) return res.json(err);
        return res.json({ status: 'Your cliente is saved database!' })
    })
});

module.exports = route;*/