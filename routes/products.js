const express = require('express');
const ProductController = require('../controllers/products');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductController.getAll();
  res.status(200).send(products);
});

module.exports = router;
