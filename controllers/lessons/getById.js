const { Lesson } = require('../../models/lessons')
const getAudio = require('../../google/index')

const getById = async (req, res) => {
 
  const { lessonNumber } = req.params
  const result = await Lesson.findOne({ lessonNumber })
  if (!result) {
    const error = new Error(`lesson with number ${lessonNumber} not found`)
    error.status = 404
    throw error
  }
  const audioUrl = getAudio(result.lessonAudio)

  res.json({ id: result._id,
    lessonAudio: audioUrl,
    lessonNumber: result.lessonNumber,
    lessonText: result.lessonText,
    stage: result.stage,})
}
module.exports = getById
