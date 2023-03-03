const { Grammar, grammarJoiSchema } = require("../../models/grammar");

const updateRule = async (req, res) => {
  const { _id } = req.user;

  const { error } = grammarJoiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const { wordId } = req.params;

  const result = await Grammar.findByIdAndUpdate(
    ruleId,
    { ...req.body, owner: _id },
    {
      new: true,
    }
  );
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = updateRule;
