const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async list(request, response) {
    const sgqs = await connection('sgqs').select('*')

    return response.json(sgqs)
  },

  async create(request, response) {
    const { type, title, inf } = request.body

    const sgq_id = crypto.randomBytes(4).toString('HEX')

    await connection('sgqs').insert({
      sgq_id,
      type,
      title,
      inf
    })

    return response.json({ sgq_id })
  }
}