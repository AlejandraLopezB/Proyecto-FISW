var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var models = require('./models/');

var app = express();
var usuarios = require('./controllers/users');
var materiales = require('./controllers/materiales');

app.use("/node_modules", express.static('node_modules'));
app.use("/routes", express.static('routes'));
app.use("/controllers", express.static('controllers'));

//app.use(express.static(__dirname + '/views'));
//app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', usuarios.index);
app.get('/users/:id', usuarios.show);
app.post('/users', usuarios.create);
app.put('/users', usuarios.update);
app.delete('/users', usuarios.delete);

app.get('/materiales', materiales.index);
app.get('/materiales/:id', materiales.show);
app.post('/materiales', materiales.create);
app.put('/materiales', materiales.update);
app.delete('/materiales', materiales.delete);

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
