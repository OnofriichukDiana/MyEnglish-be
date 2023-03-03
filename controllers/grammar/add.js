const { Grammar, grammarJoiSchema } = require("../../models/grammar");

const add = async (req, res) => {
  const { _id } = req.user;
  const { error } = grammarJoiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }

  const result = await Grammar.create({ ...req.body, owner: _id });
  res.status(201).json( { result } );
};
module.exports = add;
