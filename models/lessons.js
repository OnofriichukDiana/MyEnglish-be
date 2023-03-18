const { Schema, model } = require("mongoose");

const lessonsSchema = Schema(
  {
    stage: {
      type: Number,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
    }, 
    lessonText: {
      type: String,
      required: true,
    },
    lessonAudio: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Lesson = model("lesson", lessonsSchema);

module.exports = { Lesson };
