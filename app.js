//Importar
var express =require("express"),
	app=express(),
	server=require('http').createServer(app),
	cons= require('consolidate'),
	path = require("path");
var multer = require('multer');
var bodyParser = require('body-parser');
var fs = require('fs'); //para el archivo json
//Instanciar
	app.use(express.static('./public'));
	//funcion importante para subir archivos
	app.use(bodyParser());
	app.use(bodyParser({uploadDir:'./uploads'}));

//ruteo
// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/views/index.html');
// });
// app.get('/about', function(req, res){
// 	res.sendFile(__dirname + '/views/about.html')
// });
// app.use(express.static('public'));



app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/public/stylesheets',  express.static(__dirname + '/public/stylesheets'));

//home.html
app.get('/',function(req,res){
    res.sendFile('home.html',{'root': __dirname + '/views'});
})

//signin.html
app.get('/showSignInPage',function(req,res){
    res.sendFile('signin.html',{'root': __dirname + '/views'});
})

//signup.html
app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/views'})
})

//perfil.html
app.get('/showperfil_divergente',function(req,res){
  res.sendFile('perfil_divergente.html',{'root':__dirname + '/views'})
})

app.get('/showperfil_convergente',function(req,res){
  res.sendFile('perfil_convergente.html',{'root':__dirname + '/views'})
})

app.get('/showperfil_adaptador',function(req,res){
  res.sendFile('perfil_adaptador.html',{'root':__dirname + '/views'})
})

app.get('/showperfil_asimilador',function(req,res){
  res.sendFile('perfil_asimilador.html',{'root':__dirname + '/views'})
})

//Editar perfil alumno
app.get('/editarPerfil_as',function(req,res){
  res.sendFile('editarPerfil_as.html',{'root':__dirname + '/views'})
})

app.get('/editarPerfil_ad',function(req,res){
  res.sendFile('editarPerfil_ad.html',{'root':__dirname + '/views'})
})

app.get('/editarPerfil_con',function(req,res){
  res.sendFile('editarPerfil_con.html',{'root':__dirname + '/views'})
})

app.get('/editarPerfil_div',function(req,res){
  res.sendFile('editarPerfil_div.html',{'root':__dirname + '/views'})
})

//editarPerfil.html
app.get('/editarPerfilProfe',function(req,res){
  res.sendFile('editarPerfilProfe.html',{'root':__dirname + '/views'})
})

//showPerfilProfe.html
app.get('/showPerfilProfe',function(req,res){
  res.sendFile('perfilProfe.html',{'root':__dirname + '/views'})
})

//perfilAdmin.html
app.get('/perfilAdmin',function(req,res){
  res.sendFile('perfilAdmin.html',{'root':__dirname + '/views'})
})

//editarUsuarios.html
app.get('/editarUsuarios',function(req,res){
  res.sendFile('editarUsuarios.html',{'root':__dirname + '/views'})
})
app.get('/subirarchivos',function(req,res){
  res.sendFile('subirarchivos.html',{'root':__dirname + '/views'})
})

//app.use(app.router);


// database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '141994',
	database : 'basededatos'
});

connection.connect();

//Insertar nuevo usuario
app.post('/insertuser', function (req, res){
  console.log("POST: ");
  id_mail = req.body.mail;
  nombre = req.body.nombre;
  apellido = req.body.apellido;
  pass = req.body.pass;
  perfil = req.body.perfil;
  //console.log('insert into usuarios ( username , password ) values (' + "'" + nombre +"'" +',' + "'"+ pass +"'" +');');
  connection.query('insert into USUARIOS ( id_mail, nombre, apellido,  pass, perfil ) values (' + "'" + id_mail +"'" +',' + "'" + nombre +"'" +',' + "'"+ apellido +"'" + ',' + "'"+ pass +"'" +','+ "'" + perfil + "'" +');', function (error, rows, fields) { 
		console.log(error);
    res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end( 'record inserted...');
	}); 
	connection.end();  
});

//Login
app.post('/user/:id', function (req, res){
  	id_mail = req.body.mail;
  	pass = req.body.pass;
	connection.query('SELECT * FROM USUARIOS where id_mail ='+ "'" + id_mail + "'" + ' and pass =' + "'" + pass + "'" + ';', function (error, rows, fields){
         //res.writeHead(200, {'Content-Type': 'text/plain'});
		 str='';
		 if(rows.length==0)
		 {
			res.end( 'Ingrese bien los datos...');
			//break;
		 }
		 else
		 {
		 	if(rows[0].tipo == 0){
		 		res.sendFile(__dirname + '/views/perfilAdmin.html');
		 	}
		 	else if (rows[0].tipo == 1) {
		 		res.sendFile(__dirname + '/views/perfilProfe.html');
		 	}
		 	else if (rows[0].perfil == "divergente")  {
				//str = str + 'Usuario es '+ rows[0].nombre +'\n';
				//req.method = 'get'; 
	  			//res.redirect('http://localhost:9000/showPerfil'); 
				//res.redirect('/showPerfil');
				res.sendFile(__dirname + '/views/perfil_divergente.html');
				// res.render('views/perfil.html');
				//res.end(str);
		 	}
		 	else if (rows[0].perfil == "convergente")  {
				res.sendFile(__dirname + '/views/perfil_convergente.html');
		 	}
		 	else if (rows[0].perfil == "adaptador")  {
				res.sendFile(__dirname + '/views/perfil_adaptador.html');
		 	}
		 	else if (rows[0].perfil == "asimilador")  {
				res.sendFile(__dirname + '/views/perfil_asimilador.html');
		 	}
		 }
		
      });
      //connection.end();   

});

//Perfil editado
app.post('/editado', function (req, res){
	nombre = req.body.nombre;
	apellido = req.body.apellido;
  	id_mail = req.body.mail;
  	pass = req.body.pass;
	connection.query('UPDATE USUARIOS SET nombre =' + "'" + nombre + "'" + ', apellido =' + "'" + apellido + "'" + ', pass=' + "'" + pass + "'" + 'WHERE id_mail = ' + "'" + id_mail + "'" + ';', function (error, rows, fields){
         //res.writeHead(200, {'Content-Type': 'text/plain'});
		 str='';
		 if(rows.length==0)
		 {
			res.end( 'Ingrese bien los datos...');
			//break;
		 }
		 else
		 {
		 	res.end( 'usuario actualizado...');
		 }
		
      });
      //connection.end();
});

app.post('/editarUsuarios', function (req, res){
	connection.query('SELECT * FROM USUARIOS WHERE tipo = "1" OR tipo = "2";', function (error, rows, fields) { 
		if(rows.length==0)
		{
			console.log(error);
		}
	 	else
	 	{
		    fs.writeFile(__dirname + 'C:/Users/franc/Desktop/Proyecto-FISW-master/views/usuarios.json', JSON.stringify(rows), function(err){
  				if (err) return console.log(err.message);
  				else{
  					console.log('Archivo escrito \\o/');
					//res.sendFile(__dirname + '/views/editarUsuarios.html');
  				}
					

			});
		}
	});
      //connection.end();
});

app.post('/subir',multer({ dest: './public/uploads/'}).single('miarchivo'),function (req,res) {

		var tmp_path=req.file.path;//ruta del archivo
		var tipo=req.file.mimetype;//tipo del archivo
		
		if(1==1){
			//Si es de tipo png jpg o jpeg
			var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

			var target_path='./public/uploads/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
			fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
				fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
					//damos una respuesta al cliente
					res.sendFile(__dirname + '/views/subirarchivos.html');
				});
			});

		}else{
			res.send('Tipo de archivo no soportado ');
		}

	});
//escuchar
app.listen(9000);
 console.log("Servidor corriendo en http://localhost:9000/");