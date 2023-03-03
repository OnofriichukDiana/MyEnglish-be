const { Vocabulary } = require("../../models/vocabulary");

const deleteById = async (req, res) => {
  const { _id } = req.user;
  const { wordId } = req.params;
  const result = await Vocabulary.findOneAndRemove({ _id: wordId, owner: _id });
  if (!result) {
    const error = new Error(`word with id ${wordId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    message: "word deleted",
    data: { result },
  });
};
module.exports = deleteById;
