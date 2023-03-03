const { Vocabulary } = require("../../models/vocabulary");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { word, page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  let vocabulary = [];
  const allVocabulary = await Vocabulary.find({ owner: _id });

  if (word !== "") {
    vocabulary = await Vocabulary.find(
      { owner: _id, word: { $regex: word, $options: word } },
      "",
      {
        skip,
        limit: Number(limit),
      }
    );
  } else {
    vocabulary = await Vocabulary.find({ owner: _id }, "", {
      skip,
      limit: Number(limit),
    });
  }

  res.json({ total: allVocabulary.length, vocabulary });
};
module.exports = getAll;
