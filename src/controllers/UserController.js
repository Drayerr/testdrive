const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async list(request, response) {
    const users = await connection('users').select('*')

    return response.json(users)
  },

  async create(request, response) {
    const { name, email, key, cargo } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('users').insert({
      id,
      name,
      email,
      key,
      cargo
    })
    return response.json({ id })
  }
}