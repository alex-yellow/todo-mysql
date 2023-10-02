const express = require('express');
const mysql = require('mysql');
const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
});
const app = express();
app.use(express.urlencoded({ extended: true }));
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_app'
});

connection.connect(function(err) {
  if (err) {
    console.error('Ошибка подключения к базе данных: ' + err.stack);
    return;
  }
  console.log('Успешно подключились к базе данных MySQL!');
});

app.get('/', function(req, res) {
  connection.query('SELECT * FROM users', function(error, users, fields) {
    if (error) throw error;
    console.log(users);
    res.render('index', {users:users});
  });
});

app.listen(3000, function() {
  console.log('server is running on port 3000');
});
