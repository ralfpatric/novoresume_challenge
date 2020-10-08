const { getProducts } = require('../models/products');

exports.getAll = async () => {
  const productResults = await getProducts();
  return productResults;
};
