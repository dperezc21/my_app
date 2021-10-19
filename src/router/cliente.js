
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
});*/

module.exports = route;