const { Grammar } = require("../../models/grammar");

const deleteById = async (req, res) => {
  const { _id } = req.user;
  const { wordId } = req.params;
  const result = await Grammar.findOneAndRemove({ _id: wordId, owner: _id });
  if (!result) {
    const error = new Error(`rule with id ${ruleId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    message: "rule deleted",
    data: { result },
  });
};
module.exports = deleteById;
