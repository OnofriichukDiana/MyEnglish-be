const { Schema, model } = require("mongoose");

const lessonsSchema = Schema(
  {
    stage: {
      type: Number,
      required: true,
    },
    lessonNumer: {
      type: Number,
      required: true,
    }, 
    lessonText: [ {words: Schema.Types.Mixed, transcription: Schema.Types.Mixed, translations: Schema.Types.Mixed, explanation: Schema.Types.Mixed, question: Schema.Types.Mixed, answers: Schema.Types.Mixed }],
    lessonAudio: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Lesson = model("lesson", lessonsSchema);

module.exports = { Lesson };
