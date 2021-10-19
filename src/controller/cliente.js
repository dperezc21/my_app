const mysqlConnection = require('../conexion');
const queries = require('../repositories/cliente/query_cliente');

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