const { Schema, model } = require("mongoose");
const joi = require("joi");

const grammarJoiSchema = joi.object({
  word: joi.string().required(),
  translation: joi.string().required(),
});

const grammarSchema = Schema(
  {
    rule: {
      type: String,
      required: [true, "Set rule"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Grammar = model("grammar", grammarSchema);

module.exports = { Grammar, grammarJoiSchema, };
