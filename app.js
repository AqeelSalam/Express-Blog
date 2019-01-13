const express = require('express');
const app = express();
const routerController = require('./config/routes');
const postController = require('./config/posts')
const authorController = require('./config/authors')
const expressLayouts = require('express-ejs-layouts');
const port = process.env.port || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);

  next();
});

app.use('/',routerController);
app.use('/posts',postController);
app.use('/authors',authorController);

app.listen(port, ()=> {
  console.log(`listening on port ${port}.`)
});

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/:food", function(req, res){
  console.log(req.params);
  res.send(`Hello, ${req.params.name}!`)
})

app.get("/:name", function(req, res){
  console.log(req.params);
  res.send(`Hello, ${req.params.name}!`);
});
