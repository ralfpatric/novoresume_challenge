const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { init } = require('./db');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

const app = express();

const PORT = 9007;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

init().then(() => {
  // Seed function for the database when running the project for the first time
  // Needed si products exist in the database
  // seedProducts();
  app.listen(PORT);
});
