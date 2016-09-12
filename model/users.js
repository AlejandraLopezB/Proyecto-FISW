var mysql = require('mysql');
var Schema = mysql.Schema;

var Schema = {
	usuario: {
		id_mail: {type: String},
		nombre: {type: String},
		apellido: {type: String},
		pass: {type: String},
		tipo: {type: String},
		perfil: {type: String}
	}
};

module.exports = Schema;
