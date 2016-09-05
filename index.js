var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '141994',
	database : 'basededatos'
});

connection.connect();

connection.query('SELECT * from USUARIOS', function(err, rows) {
	if (err) throw err;
	console.log('The number is: ', rows[0].id_mail);
	console.log('The number is: ', rows[1].id_mail);
	console.log('The number is: ', rows[2].id_mail);

});

//connection.query("INSERT INTO tabla1 (id, nombre) VALUES (6,'Konata')");

connection.end();