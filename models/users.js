const { Schema, model } = require('mongoose')
const joi = require('joi')

const userSignUpJoiSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().min(6).required(),
  availableLessons: joi.array().items(joi.number()).required()
})
const userLogInJoiSchema = joi.object({
  email: joi.string().email(),
  password: joi.string().min(6).required(),
  availableLessons: joi.array().items(joi.number()).required()
})
const availableLessonsJoiSchema = joi.object({
  availableLessons: joi.array().items(joi.number()).required(),
})

const userSchema = Schema({
  name: {type: String},
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  availableLessons: [Number],
  avatarURL: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
})

const User = model('user', userSchema)

module.exports = {
  User,
  userSignUpJoiSchema,
  userLogInJoiSchema,
  availableLessonsJoiSchema,
}
