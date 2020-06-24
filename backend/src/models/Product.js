const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      provider: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      image: DataTypes.BLOB,
    }, {
      sequelize
    })
  }
}

module.exports = Product;