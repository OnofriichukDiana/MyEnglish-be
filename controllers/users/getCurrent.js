const { User } = require("../../models/users");

const getCurrent = async (req, res) => {
  const { name, email, availableLessons, avatarURL,  } = req.user;
  res.json( { name, email, availableLessons, avatarURL } );
};

module.exports = getCurrent;
