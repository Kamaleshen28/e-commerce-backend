'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productDetails.init({
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    reviews: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productDetails',
  });
  return productDetails;
};