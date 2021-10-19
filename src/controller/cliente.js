const Sequelize     = require('sequelize');
const cliente       = require('../../models').cliente;
module.exports = {
 create(req, res) {
    return cliente
        .create ({
             nombre: req.body.nombre,
             apellido: req.body.apellido,
             edad: req.body.edad
        })
        .then(cliente => res.status(200).send(cliente))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return cliente.findAll({})
        .then(cliente => res.status(200).send(cliente))
        .catch(error => res.status(400).send(error))
 },
 findById (req, res) {
     return cliente.findOne({
         where: {
             id: req.params.id,
         }
     })
     .then(cliente => res.status(200).send(cliente))
     .catch(error => res.status(400).send(error))
  },

  deleteById (req, res) {
    return cliente.destroy({
        where: {
            id: req.params.id,
        }
    })
    .then(cliente => res.json({data:cliente}))
    .catch(error => res.json({error_message:error}))
 },

 update (req, res) {
    
    return cliente.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edadS
    },{
        where: {
            id: req.body.id,
        }
    })
    .then(cliente => res.status(200).send(cliente))
    .catch(error => res.status(400).send(error))
 },

 findByName (req, res) {
    return cliente.findAll({
        where: {
            nombre: req.params.nombre,
        }
    })
    .then(cliente => res.status(200).send(cliente))
    .catch(error => res.status(400).send(error))
 },
};
/*
const mysqlConnection = require('../conexion');
const queries = require('../repositories/query_cliente');

const controllers = {
    consultar: function (req, res){
        //consulta de los conductores en la base de datos a través de mysqlconnection
        mysqlConnection.query(queries.consultar(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
        //mysqlConnection.end();
    },

    consultarCliente: function (req, res){
        //consulta de los conductores en la base de datos a través de mysqlconnection
        mysqlConnection.query(queries.consultarPorId(), req.params.id, (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
        //mysqlConnection.end();
    },

    actualizar: function(req, res){
        //consulta de los conductores en la base de datos a través de mysqlconnection
        const {id,nombre, apellido, edad} = req.body;
        mysqlConnection.query(queries.consultarPorId(), id, (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0){
                    //console.log(rows);
                    mysqlConnection.query(queries.actualizar(), [nombre, apellido, edad, id], (err, rows, fields) => {
                        if (err) return res.json(err);
                        return res.json({ status: 'cliente update!' })
                    })
                    
                }else{
                    res.json({message:"El usuaro no existe"});
                }
            } else {
                console.log(err);
            }
        });
        //mysqlConnection.end();
    },

    insertar: function(req, res){
        //console.log(req.body);
        const {nombre, apellido, edad} = req.body;
        const query = queries.insertar();
        mysqlConnection.query(query, [ nombre, apellido, edad], (err, rows, fields) => {
            if (err) return res.json(err);
            return res.json({ status: 'Your Cliente is saved database!' });
        });
        //mysqlConnection.end();
    }, 

    eliminar: function(req, res){
        mysqlConnection.query(queries.eliminar(), [req.params.id], (err, rows, fields) => {
            if (err) return res.json(err);
            return res.json({ status: 'Your Cliente is deleted database!' })
        });
        //mysqlConnection.end();
    }
    

}

module.exports = controllers;
*/
