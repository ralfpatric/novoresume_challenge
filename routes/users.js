const express = require('express');
const UsersController = require('../controllers/users');

const router = express.Router();

router.post('/', async (req, res) => {
  const userData = req.body;
  const result = await UsersController.register(userData);
  res.status(200).send(result);
});

router.post('/login', async (req, res) => {
  const loginData = req.body;
  const result = await UsersController.login(loginData);
  res.status(result.status).send(result);
});

module.exports = router;
