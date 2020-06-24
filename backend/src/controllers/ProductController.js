const Product = require('../models/Product');

module.exports = {
  async index (req,res) {
    const products = await Product.findAll();

    return res.json(products);
  },
  
  async store(req, res) {
    const { name, description, provider, quantity, image } = req.body;

    const product = await Product.create ({ name, description, provider, 
      quantity, image });

      return res.json(product);
  }
}