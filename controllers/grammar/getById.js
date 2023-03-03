const { Grammar } = require('../../models/grammar')

const getById = async (req, res) => {
  const { _id } = req.user
  const { ruleId } = req.params
  const result = await Vocabulary.findOne({ ruleId, owner: _id })
  if (!result) {
    const error = new Error(`rule with id ${ruleId} not found`)
    error.status = 404
    throw error
  }
  res.json({ status: 'success', code: 200, data: { result } })
}
module.exports = getById
