'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCredentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // userCredentials.belongsToMany(models.productDetails, {through: 'Carts'});    
    }
  }
  userCredentials.init({
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userCredentials',
  });
  return userCredentials;
};