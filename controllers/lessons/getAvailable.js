const { Lesson } = require("../../models/lessons");
const {User} = require('../../models/users')

const getAvailable = async (req, res) => {
  const { _id } = req.user;
  const {availableLeasons} = await User.findById(_id)
  
   const lessons = await Lesson.find({ lessonNumber: {$in: availableLeasons} });
   if (!lessons) {
    const error = new Error(`lessons with numbers ${availableLeasons} not found`)
    error.status = 404
    throw error
  }

  res.json({ lessons });
};
module.exports = getAvailable;
