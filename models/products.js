// TO DO: Implement a check using @hapi to ensure the given data
// matches the requested data for the database

exports.getProducts = () => {
  const collection = global.db.collection('products');
  return collection.find({}).toArray();
};
