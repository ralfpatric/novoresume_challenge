const { login } = require("../../../models/users")

module.exports = {
    baseUrl      : 'localhost:9007',      // Root url for api, should change depending on environment
    register     : host + '/users',       // POST request to create users
    login        : host + '/users/login', // POST request to login users
    fetchProducts: host + '/products'     // GET request to fetch all the products
}