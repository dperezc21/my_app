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
