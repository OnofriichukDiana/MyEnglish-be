const { User, availableLessonsJoiSchema } = require('../../models/users')

const updateAvailableLessons = async (req, res) => {
  const { error } = availableLessonsJoiSchema.validate(req.body)
  if (error) {
    error.status = 400
    throw error
  }
  const { _id } = req.user
  const { availableLessons } = req.body
  const result = await User.findByIdAndUpdate(
    _id,
    { availableLessons },
    { new: true },
  )
  res.json({ status: 'success', code: 200, data: { availableLessons } })
}

module.exports = updateAvailableLessons
