// //Importar

app.post('/insertuser', function (req, res){
  console.log("POST: ");
  id_mail = req.body.mail;
  nombre = req.body.nombre;
  apellido = req.body.apellido;
  pass = req.body.pass;
  //console.log('insert into usuarios ( username , password ) values (' + "'" + nombre +"'" +',' + "'"+ pass +"'" +');');
  connection.query('insert into USUARIOS ( id_mail, nombre, apellido,  pass ) values (' + "'" + id_mail +"'" +',' + "'" + nombre +"'" +',' + "'"+ apellido +"'" + ',' + "'"+ pass +"'" +');', function (error, rows, fields) { 
		console.log(error);
    res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end( 'record inserted...');
	}); 
	connection.end();  
});

// app.get('/user/:id', function (req, res){
  
// 	connection.query('SELECT * FROM user where id_mail ='+req.params.id_mail, function (error, rows, fields) { 
//          res.writeHead(200, {'Content-Type': 'text/plain'});
// 		 str='';
// 		 if(rows.length==0)
// 		 {
// 			res.end( 'no such record found...');
// 			//break;
// 		 }
// 		 else
// 		 {
// 			str = str + 'User is '+ rows[0].nombre +'\n';
// 			res.end( str);
// 		}
//       });
//       connection.end();   

// });

