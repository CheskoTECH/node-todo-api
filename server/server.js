var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc); // можно смотреть в Postman
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

// создаем модель и далее наполняем данными и сохраняем в коллекцию
//
// var newTodo = new Todo({ // создаем новую задачу
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => { // сохрнаняем ранее созданную задачу
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// })
//
// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// })
