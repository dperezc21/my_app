'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Cliente = sequelize.define('cliente',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.STRING
  });
  return Cliente;
};