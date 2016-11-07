'use strict';

module.exports = function(sequelize, DataTypes) {
	var Material = sequelize.define("Material", {
	  	id_material: {
	  		primaryKey: true,
	  		type: DataTypes.INTEGER,
	  		allowNull: false,
	  		autoIncrement: true
	  	},
	    direccion: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    tipo: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    unidad: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    }
	}, {
	    tableName: 'MATERIALES'
	});
  return Material;
};
