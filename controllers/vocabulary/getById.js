const { Vocabulary } = require('../../models/vocabulary')

const getById = async (req, res) => {
  const { _id } = req.user
  const { wordId } = req.params
  const result = await Vocabulary.findOne({ wordId, owner: _id })
  if (!result) {
    const error = new Error(`word with id ${wordId} not found`)
    error.status = 404
    throw error
  }
  res.json({ status: 'success', code: 200, data: { result } })
}
module.exports = getById
