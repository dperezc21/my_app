
const query = {

    consultar: function(){
        return "SELECT * FROM cliente";
    },

    consultarPorId: function(){
        return "SELECT * FROM cliente WHERE id=?";
    },
    
    eliminar: function(){
        return "DELETE FROM cliente WHERE id=?";
    },

    insertar: function(){
        return "INSERT INTO cliente (nombre, apellido, edad) VALUES (?,?,?)";
    },

    actualizar: function(){
        return "UPDATE cliente SET nombre=?, apellido=?, edad=? WHERE id=?";
    }




}

module.exports = query;

