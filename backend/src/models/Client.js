const { Model, DataTypes } = require ('sequelize');

class Client extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      anddress: DataTypes.STRING,
      number: DataTypes.INTEGER,
      cep: DataTypes.INTEGER,
      bairro: DataTypes.STRING,
      complement:DataTypes.STRING,
      genero: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Client;