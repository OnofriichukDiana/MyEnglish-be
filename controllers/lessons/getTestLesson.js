const { Lesson } = require('../../models/lessons')
const getAudio = require('../../google/index')

const getTestLesson = async (req, res) => {
  const { lessonNumber } = req.params
  const result = await Lesson.findOne({ lessonNumber: Number(lessonNumber) })
 
  if (!result) {
    const error = new Error(`lesson with number ${lessonNumber} not found`)
    error.status = 404
    throw error
  }

  const audioUrl = await getAudio(result.lessonAudio);
 

  res.json({
    id: result._id,
    lessonAudio: audioUrl,
    lessonNumber,
    lessonText: result.lessonText,
    stage: result.stage,
  })
}
module.exports = getTestLesson
