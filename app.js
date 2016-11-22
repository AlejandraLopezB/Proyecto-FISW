var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var models = require('./models/');
var fs = require('fs'); //para el archivo json

var app = express();
var usuarios = require('./controllers/users');
var materiales = require('./controllers/materiales');

app.use("/public", express.static('public'));
app.use("/node_modules", express.static('node_modules'));
app.use("/routes", express.static('routes'));
app.use("/controllers", express.static('controllers'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', usuarios.index);
app.get('/users/:id_mail', usuarios.show);
app.post('/users', usuarios.create);
app.post('/users/:id_mail', usuarios.update);
app.delete('/users', usuarios.delete);

app.get('/materiales', materiales.index);
app.get('/materiales/:id', materiales.show);
app.post('/materiales', materiales.create);
app.put('/materiales', materiales.update);
app.delete('/materiales', materiales.delete);

app.post('/subirCT1',multer({ dest: './public/convergente/tema1/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/convergente/tema1/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin2.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirCT2',multer({ dest: './public/convergente/tema2/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/convergente/tema2/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirCT3',multer({ dest: './public/convergente/tema3/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/convergente/tema3/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});
app.post('/subirCT4',multer({ dest: './public/convergente/tema4/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/convergente/tema4/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirDT1',multer({ dest: './public/divergente/tema1/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/divergente/tema1/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirDT2',multer({ dest: './public/divergente/tema2/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/divergente/tema2/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirDT3',multer({ dest: './public/divergente/tema3/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/divergente/tema3/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirDT4',multer({ dest: './public/divergente/tema4/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/convergente/tema4/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirADT1',multer({ dest: './public/adaptador/tema1/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/adaptador/tema1/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirADT2',multer({ dest: './public/adaptador/tema2/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/adaptador/tema2/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirADT3',multer({ dest: './public/adaptador/tema3/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/adaptador/tema3/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirADT4',multer({ dest: './public/adaptador/tema4/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/adaptador/tema4/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirAST1',multer({ dest: './public/asimilador/tema1/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/asimilador/tema1/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirAST2',multer({ dest: './public/asimilador/tema2/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/asimilador/tema2/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirAST3',multer({ dest: './public/asimilador/tema3/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/asimilador/tema3/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.post('/subirAST4',multer({ dest: './public/asimilador/tema4/'}).single('miarchivo'),function (req,res) {

	var tmp_path=req.file.path;//ruta del archivo
	var tipo=req.file.mimetype;//tipo del archivo
	
	if(1==1){
		//Si es de tipo png jpg o jpeg
		var nombrearchivo=req.file.originalname;//nombre del archivo mas variable aleatoria

		var target_path='./public/asimilador/tema4/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
		fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
			fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
				//damos una respuesta al cliente
				res.sendFile(__dirname + '/views/perfiles/admin.html');
			});
		});

	}else{
		res.send('Tipo de archivo no soportado ');
	}

});

app.get('/listaarchivosAST', function (req,res) {
  fs.readdir('./public/asimilador/tema4/',function (err,archivos){
	  var AST4='';
	  for(var x=0;x<archivos.length;x++) {
		  AST4 += '<a href="/public/asimilador/tema4/'+archivos[x]+'">'+archivos[x]+'</a><br>';
	  }
	  fs.readdir('./public/asimilador/tema3/',function (err,archivos){
		  var AST3='';
		  for(var x=0;x<archivos.length;x++) {
			  AST3 += '<a href="/public/asimilador/tema3/'+archivos[x]+'">'+archivos[x]+'</a><br>';
		  }
		  fs.readdir('./public/asimilador/tema2/',function (err,archivos){
			  var AST2='';
			  for(var x=0;x<archivos.length;x++) {
				  AST2 += '<a href="/public/asimilador/tema2/'+archivos[x]+'">'+archivos[x]+'</a><br>';
			  }
			  fs.readdir('./public/asimilador/tema1/',function (err,archivos){
				  var AST1='';
				  for(var x=0;x<archivos.length;x++) {
					  AST1 += '<a href="/public/asimilador/tema1/'+archivos[x]+'">'+archivos[x]+'</a><br>';
				  }
				  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="icon" type="image/png" href="assets/img/favicon.ico"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><title>AngularJS</title><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><meta name="viewport" content="width=device-width" /><link rel="stylesheet" type="text/css"  href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/animate.min.css" rel="stylesheet"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><link href="http://fonts.googleapis.com/css?family=Roboto:400,700,300" rel="stylesheet" type="text/css"><link href="../../public/stylesheets/bootstrap-theme/assets/css/pe-icon-7-stroke.css" rel="stylesheet" /><script src="../../node_modules/jquery/dist/jquery.min.js"></script><script src="../../node_modules/angular/angular.min.js"></script><script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script><script type="https://code.angularjs.org/1.5.8/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script><script src="../routes/perfil.js"> </script><script src="../controllers/navegacionControl.js"></script><script src="./controllers/editarPerfil.js"></script><script src="../../controllers/datosUsuario.js"></script><script src="./controllers/variables.js"></script></head><body ng-app="navegacion"><div class="wrapper"><div class="sidebar" data-color="blue" data-image="../public/stylesheets/bootstrap-theme/assets/img/sidebar-6.jpg"><div class="sidebar-wrapper" ng-controller="navegacionControl"><div class="logo"><a class="simple-text" ng-controller="datosUsuario">Hola {{alumno.nombre}}</a></div><ul class="nav"><li ng-class="{active:isActive('+"'/'"+')}"><a href="#/"><i class="pe-7s-home"></i><p>Inicio</p></a></li><li ng-class="{active:isActive('+"'/editarPerfil'"+')}"><a href="#/editarPerfil"><i class="pe-7s-user"></i><p>Editar Perfil</p></a></li><li ng-class="{active:isActive('+"'/verMateria'"+')}"><a href="#/verMateria"><i class="pe-7s-notebook"></i><p>Ver Materia</p></a></li></ul></div></div><div class="main-panel"><nav class="navbar navbar-default navbar-fixed"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#/">Inicio</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"></ul><ul class="nav navbar-nav navbar-right"><li><a href="/">Cerrar Sesión</a></li></ul></div></div></nav><div class="content"><div class="container-fluid"><div class="row"><div class="container" ng-view ></div></div></div></div><footer class="footer"><div class="container-fluid"><nav class="pull-left"><ul><li><a href="#/">Inicio</a></li></ul></nav><p class="copyright pull-right">&copy; 2016 <a>Fam</a></p></div></footer></div></div></body><script src="../../public/stylesheets/bootstrap-theme/assets/js/jquery-1.10.2.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap.min.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-checkbox-radio-switch.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/chartist.min.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-notify.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/light-bootstrap-dashboard.js"></script><script>window.localStorage["Variables"] = angular.toJson(['+"'"+AST1+"','"+AST2+"','"+AST3+"','"+AST4+"'"+']);</script></html>');
	 			  res.end();
	 	  	  });
	 	  });
	 });
  });	
});

app.get('/listaarchivosDT', function (req,res) {
  fs.readdir('./public/divergente/tema4/',function (err,archivos){
	  var DT4='';
	  for(var x=0;x<archivos.length;x++) {
		  DT4 += '<a href="/public/divergente/tema4/'+archivos[x]+'">'+archivos[x]+'</a><br>';
	  }
	  fs.readdir('./public/divergente/tema3/',function (err,archivos){
		  var DT3='';
		  for(var x=0;x<archivos.length;x++) {
			  DT3 += '<a href="/public/divergente/tema3/'+archivos[x]+'">'+archivos[x]+'</a><br>';
		  }
		  fs.readdir('./public/divergente/tema2/',function (err,archivos){
			  var DT2='';
			  for(var x=0;x<archivos.length;x++) {
				  DT2 += '<a href="/public/divergente/tema2/'+archivos[x]+'">'+archivos[x]+'</a><br>';
			  }
			  fs.readdir('./public/divergente/tema1/',function (err,archivos){
				  var DT1='';
				  for(var x=0;x<archivos.length;x++) {
					  DT1 += '<a href="/public/divergente/tema1/'+archivos[x]+'">'+archivos[x]+'</a><br>';
				  }
				  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="icon" type="image/png" href="assets/img/favicon.ico"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><title>AngularJS</title><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><meta name="viewport" content="width=device-width" /><link rel="stylesheet" type="text/css"  href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/animate.min.css" rel="stylesheet"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><link href="http://fonts.googleapis.com/css?family=Roboto:400,700,300" rel="stylesheet" type="text/css"><link href="../../public/stylesheets/bootstrap-theme/assets/css/pe-icon-7-stroke.css" rel="stylesheet" /><script src="../../node_modules/jquery/dist/jquery.min.js"></script><script src="../../node_modules/angular/angular.min.js"></script><script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script><script type="https://code.angularjs.org/1.5.8/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script><script src="../../routes/perfil.js"> </script><script src="../../controllers/navegacionControl.js"></script><script src="../../controllers/editarPerfil.js"></script><script src="../../controllers/datosUsuario.js"></script><script src="./controllers/variables.js"></script></head><body ng-app="navegacion"><div class="wrapper"><div class="sidebar" data-color="purple" data-image="../public/stylesheets/bootstrap-theme/assets/img/sidebar-8.jpg"><div class="sidebar-wrapper" ng-controller="navegacionControl"><div class="logo"><a class="simple-text" ng-controller="datosUsuario">Hola {{alumno.nombre}}</a></div><ul class="nav"><li ng-class="{active:isActive('+"'/'"+')}"><a href="#/"><i class="pe-7s-home"></i><p>Inicio</p></a></li><li ng-class="{active:isActive('+"'/editarPerfil'"+')}"><a href="#/editarPerfil"><i class="pe-7s-user"></i><p>Editar Perfil</p></a></li><li ng-class="{active:isActive('+"'/verMateria'"+')}"><a href="#/verMateria"><i class="pe-7s-notebook"></i><p>Ver Materia</p></a></li></ul></div></div><div class="main-panel"><nav class="navbar navbar-default navbar-fixed"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#/">Inicio</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"></ul><ul class="nav navbar-nav navbar-right"><li><a href="/">Cerrar Sesión</a></li></ul></div></div></nav><div class="content"><div class="container-fluid"><div class="row"><div class="container" ng-view ></div></div></div></div><footer class="footer"><div class="container-fluid"><nav class="pull-left"><ul><li><a href="#/">Inicio</a></li></ul></nav><p class="copyright pull-right">&copy; 2016 <a>Fam</a></p></div></footer></div></div></body><script src="../../public/stylesheets/bootstrap-theme/assets/js/jquery-1.10.2.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap.min.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-checkbox-radio-switch.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/chartist.min.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-notify.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/light-bootstrap-dashboard.js"></script><script>window.localStorage["Variables"] = angular.toJson(['+"'"+DT1+"','"+DT2+"','"+DT3+"','"+DT4+"'"+']);</script></html>');
	 			  res.end();
	 	  	  });
	 	  });
	 });	  
  });	
});

app.get('/listaarchivosCT', function (req,res) {
  fs.readdir('./public/convergente/tema4/',function (err,archivos){
	  var CT4='';
	  for(var x=0;x<archivos.length;x++) {
		  CT4 += '<a href="/public/convergente/tema4/'+archivos[x]+'">'+archivos[x]+'</a><br>';
	  }
	  fs.readdir('./public/convergente/tema3/',function (err,archivos){
		  var CT3='';
		  for(var x=0;x<archivos.length;x++) {
			  CT3 += '<a href="/public/convergente/tema3/'+archivos[x]+'">'+archivos[x]+'</a><br>';
		  }
		  fs.readdir('./public/convergente/tema2/',function (err,archivos){
			  var CT2='';
			  for(var x=0;x<archivos.length;x++) {
				  CT2 += '<a href="/public/convergente/tema2/'+archivos[x]+'">'+archivos[x]+'</a><br>';
			  }
			  fs.readdir('./public/convergente/tema1/',function (err,archivos){
				  var CT1='';
				  for(var x=0;x<archivos.length;x++) {
					  CT1 += '<a href="/public/convergente/tema1/'+archivos[x]+'">'+archivos[x]+'</a><br>';
				  }
				  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="icon" type="image/png" href="assets/img/favicon.ico"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><title>AngularJS</title><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><meta name="viewport" content="width=device-width" /><link rel="stylesheet" type="text/css"  href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/animate.min.css" rel="stylesheet"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><link href="http://fonts.googleapis.com/css?family=Roboto:400,700,300" rel="stylesheet" type="text/css"><link href="../../public/stylesheets/bootstrap-theme/assets/css/pe-icon-7-stroke.css" rel="stylesheet" /><script src="../../node_modules/jquery/dist/jquery.min.js"></script><script src="../../node_modules/angular/angular.min.js"></script><script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script><script type="https://code.angularjs.org/1.5.8/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script><script src="../../routes/perfil.js"> </script><script src="../../controllers/navegacionControl.js"></script><script src="../../controllers/editarPerfil.js"></script><script src="../../controllers/datosUsuario.js"></script><script src="./controllers/variables.js"></script></head><body ng-app="navegacion"><div class="wrapper"><div class="sidebar" data-color="azure" data-image="../public/stylesheets/bootstrap-theme/assets/img/sidebar-7.jpg"><div class="sidebar-wrapper" ng-controller="navegacionControl"><div class="logo"><a class="simple-text" ng-controller="datosUsuario">Hola {{alumno.nombre}}</a></div><ul class="nav"><li ng-class="{active:isActive('+"'/'"+')}"><a href="#/"><i class="pe-7s-home"></i><p>Inicio</p></a></li><li ng-class="{active:isActive('+"'/editarPerfil'"+')}"><a href="#/editarPerfil"><i class="pe-7s-user"></i><p>Editar Perfil</p></a></li><li ng-class="{active:isActive('+"'/verMateria'"+')}"><a href="#/verMateria"><i class="pe-7s-notebook"></i><p>Ver Materia</p></a></li></ul></div></div><div class="main-panel"><nav class="navbar navbar-default navbar-fixed"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#/">Inicio</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"></ul><ul class="nav navbar-nav navbar-right"><li><a href="/">Cerrar Sesión</a></li></ul></div></div></nav><div class="content"><div class="container-fluid"><div class="row"><div class="container" ng-view ></div></div></div></div><footer class="footer"><div class="container-fluid"><nav class="pull-left"><ul><li><a href="#/">Inicio</a></li></ul></nav><p class="copyright pull-right">&copy; 2016 <a>Fam</a></p></div></footer></div></div></body><script src="../../public/stylesheets/bootstrap-theme/assets/js/jquery-1.10.2.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap.min.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-checkbox-radio-switch.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/chartist.min.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-notify.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/light-bootstrap-dashboard.js"></script><script>window.localStorage["Variables"] = angular.toJson(['+"'"+CT1+"','"+CT2+"','"+CT3+"','"+CT4+"'"+']);</script></html>');
	 			  res.end();
	 	  	  });
	 	  });
	 });	  
  });	
});


app.get('/listaarchivosADT', function (req,res) {
  fs.readdir('./public/adaptador/tema4/',function (err,archivos){
	  var ADT4='';
	  for(var x=0;x<archivos.length;x++) {
		  ADT4 += '<a href="/public/adaptador/tema4/'+archivos[x]+'">'+archivos[x]+'</a><br>';
	  }
	  fs.readdir('./public/adaptador/tema3/',function (err,archivos){
		  var ADT3='';
		  for(var x=0;x<archivos.length;x++) {
			  ADT3 += '<a href="/public/adaptador/tema3/'+archivos[x]+'">'+archivos[x]+'</a><br>';
		  }
		  fs.readdir('./public/adaptador/tema2/',function (err,archivos){
			  var ADT2='';
			  for(var x=0;x<archivos.length;x++) {
				  ADT2 += '<a href="/public/adaptador/tema2/'+archivos[x]+'">'+archivos[x]+'</a><br>';
			  }
			  fs.readdir('./public/adaptador/tema1/',function (err,archivos){
				  var ADT1='';
				  for(var x=0;x<archivos.length;x++) {
					  ADT1 += '<a href="/public/adaptador/tema1/'+archivos[x]+'">'+archivos[x]+'</a><br>';
				  }
				  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="icon" type="image/png" href="assets/img/favicon.ico"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><title>AngularJS</title><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><meta name="viewport" content="width=device-width" /><link rel="stylesheet" type="text/css"  href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/animate.min.css" rel="stylesheet"/><link href="../../public/stylesheets/bootstrap-theme/assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><link href="http://fonts.googleapis.com/css?family=Roboto:400,700,300" rel="stylesheet" type="text/css"><link href="../../public/stylesheets/bootstrap-theme/assets/css/pe-icon-7-stroke.css" rel="stylesheet" /><script src="../../node_modules/jquery/dist/jquery.min.js"></script><script src="../../node_modules/angular/angular.min.js"></script><script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script><script type="https://code.angularjs.org/1.5.8/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-route.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script><script src="../../routes/perfil.js"> </script><script src="../../controllers/navegacionControl.js"></script><script src="../../controllers/editarPerfil.js"></script><script src="../../controllers/datosUsuario.js"></script><script src="./controllers/variables.js"></script></head><body ng-app="navegacion"><div class="wrapper"><div class="sidebar" data-color="green" data-image="../public/stylesheets/bootstrap-theme/assets/img/sidebar-5.jpg"><div class="sidebar-wrapper" ng-controller="navegacionControl"><div class="logo"><a class="simple-text" ng-controller="datosUsuario">Hola {{alumno.nombre}}</a></div><ul class="nav"><li ng-class="{active:isActive('+"'/'"+')}"><a href="#/"><i class="pe-7s-home"></i><p>Inicio</p></a></li><li ng-class="{active:isActive('+"'/editarPerfil'"+')}"><a href="#/editarPerfil"><i class="pe-7s-user"></i><p>Editar Perfil</p></a></li><li ng-class="{active:isActive('+"'/verMateria'"+')}"><a href="#/verMateria"><i class="pe-7s-notebook"></i><p>Ver Materia</p></a></li></ul></div></div><div class="main-panel"><nav class="navbar navbar-default navbar-fixed"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#/">Inicio</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"></ul><ul class="nav navbar-nav navbar-right"><li><a href="/">Cerrar Sesión</a></li></ul></div></div></nav><div class="content"><div class="container-fluid"><div class="row"><div class="container" ng-view ></div></div></div></div><footer class="footer"><div class="container-fluid"><nav class="pull-left"><ul><li><a href="#/">Inicio</a></li></ul></nav><p class="copyright pull-right">&copy; 2016 <a>Fam</a></p></div></footer></div></div></body><script src="../../public/stylesheets/bootstrap-theme/assets/js/jquery-1.10.2.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap.min.js" type="text/javascript"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-checkbox-radio-switch.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/chartist.min.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/bootstrap-notify.js"></script><script src="../../public/stylesheets/bootstrap-theme/assets/js/light-bootstrap-dashboard.js"></script><script>window.localStorage["Variables"] = angular.toJson(['+"'"+ADT1+"','"+ADT2+"','"+ADT3+"','"+ADT4+"'"+']);</script></html>');
	 			  res.end();
	 	  	  });
	 	  });
	 });	  
  });	
});

models.sequelize.sync({force: false}).then(function () {
    app.listen(9000, () => {
        console.log('Servidor arriba en el puerto 9000');
    });
});

//module.exports = app;

//verificar coneccion con la base de datos
// var models = require('./models/');
// models.sequelize
//   .authenticate()
//   .then(function () {
//     console.log('Connection successful');
//   })
//   .catch(function(error) {
//     console.log("Error creating connection:", error);
//   });
