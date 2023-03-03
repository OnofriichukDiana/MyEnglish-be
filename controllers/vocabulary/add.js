const { Vocabulary, vocabularyJoiSchema } = require("../../models/vocabulary");

const add = async (req, res) => {
  const { _id } = req.user;
  const { error } = vocabularyJoiSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }

  const result = await Vocabulary.create({ ...req.body, owner: _id });
  res.status(201).json( { result } );
};
module.exports = add;
