const { Grammar } = require("../../models/grammar");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { word, page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  let Grammar = [];
  const allGrammar = await Grammar.find({ owner: _id });

  if (word !== "") {
    grammar = await Grammar.find(
      { owner: _id, word: { $regex: word, $options: word } },
      "",
      {
        skip,
        limit: Number(limit),
      }
    );
  } else {
    grammar = await Grammar.find({ owner: _id }, "", {
      skip,
      limit: Number(limit),
    });
  }

  res.json({ total: allGrammar.length, grammar });
};
module.exports = getAll;
