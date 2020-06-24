const Client = require('../models/Client');

module.exports = {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  },
  
  async store(req, res) {
    const { name, birthday, anddress, number, cep, 
      bairro, complement, genero } = req.body;

    const client = await Client.create({ name, birthday, anddress, number, cep,
    bairro, complement, genero });
    
    return res.json(client);
  }
}