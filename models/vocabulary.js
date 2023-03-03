const { Schema, model } = require("mongoose");
const joi = require("joi");

const vocabularyJoiSchema = joi.object({
  word: joi.string().required(),
  translation: joi.string().required(),
});

const vocabularySchema = Schema(
  {
    word: {
      type: String,
      required: [true, "Set word"],
    },
    translation: {
      type: String,
      required: [true, "Set translation"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Vocabulary = model("vocabulary", vocabularySchema);

module.exports = { Vocabulary, vocabularyJoiSchema, };
