const { User, userSignUpJoiSchema } = require("../../models/users");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signUp = async (req, res) => {
  const { name, email, password, availableLessons } = req.body;

    const user = await User.findOne({ email }).exec();

  console.log(user)
 if (user) {
  const error = new Error("Email in use");
  error.status = 409;
  throw error;
}
try {
  const value = await userSignUpJoiSchema.validateAsync(req.body);
  console.log(value)
}
catch (err) { console.log(err)}
  // const { value, error } = userSignUpJoiSchema.validate(req.body ); 
  // console.log(value)
  // if (error) {
  //   error.status = 400;
  //   throw error;  
  // }
 
  console.log("avatarURL")
  const avatarURL = gravatar.url(email);
  
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    availableLessons,
  });

  const payload = { id: newUser._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "100h" });

  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
      user: {
        name,
        email,
        availableLessons,
        avatarURL,
      },
      token,
    },
  );
};

module.exports = signUp;
