const { Lesson } = require('../../models/lessons')
const getLesson = require('../../google/index')

const getTestLesson = async (req, res) => {
  const { lessonNumber } = req.params

  const result = await Lesson.findOne({ lessonNumber})

  if (!result) {
    const error = new Error(`lesson with number ${lessonNumber} not found`)
    error.status = 404
    throw error
  }

  const {webContentLink} = await getLesson(result.lessonAudio);

  res.json({ id: result._id,
    stage: result.stage,
    lessonNumber: result.lessonNumber,
    lessonAudio: webContentLink,
    lessonText: result.lessonText})
}
module.exports = getTestLesson
