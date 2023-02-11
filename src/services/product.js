const {productDetails} = require('../../database/models');
const httpError = require('../utils/httpError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createProduct = (details) => {
  const product = productDetails.create({details});
  return product;
};
const getProducts = () => {
  const product = productDetails.findAll({});
  return product;
};

module.exports = {
  createProduct,
  getProducts
};