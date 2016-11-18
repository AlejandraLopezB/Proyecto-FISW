'use strict';

module.exports = function(sequelize, DataTypes) {
	var Usuario = sequelize.define("Usuario", {
	  	id_mail: {
	  		primaryKey: true,
	  		type: DataTypes.STRING,
	  		allowNull: false
	  	},
	    nombre: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    apellido: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    pass: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    tipo: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	   	},
	    perfil: {
	    	type: DataTypes.STRING
	    }
	}, {
	    tableName: 'USUARIOS'
	});
	//poner relaciones??
  return Usuario;
};
