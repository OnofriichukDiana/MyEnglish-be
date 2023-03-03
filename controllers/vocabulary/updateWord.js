const { Vocabulary, vocabularyJoiSchema } = require("../../models/vocabulary");

const updateWord = async (req, res) => {
  const { _id } = req.user;

  const { error } = vocabularyJoiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const { wordId } = req.params;

  const result = await Vocabulary.findByIdAndUpdate(
    wordId,
    { ...req.body, owner: _id },
    {
      new: true,
    }
  );
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateWord;
