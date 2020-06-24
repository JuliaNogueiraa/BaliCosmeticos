const User = require('../models/User');

module.exports = {
  async create (req, res) {
    const { name, password} = req.body;

    const users = await new User ({name, password});
    
    return res.json(users);
  }
}