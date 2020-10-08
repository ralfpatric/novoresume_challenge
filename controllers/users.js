const argon = require('argon2');
const { register, login } = require('../models/users');

exports.register = async (userData) => {
  const hashedPassword = await argon.hash(userData.password);
  const userRecord = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: hashedPassword,
  };
  const registerResult = await register(userRecord);
  return registerResult;
};

exports.login = async (userData) => {
  const userRecord = await login(userData.email);
  if (!userRecord) return { error: 'User not found', status: 500 };
  const correctPassword = await argon.verify(userRecord.password, userData.password);
  // The error mentions both username or password to avoid giving potential
  // breachers too much information
  if (!correctPassword) return { error: 'Incorrect username of password', status: 500 };
  // TO DO: GENERATE A SECURITY TOKEN WITH JWT
  // In a regular project a JWT should be generated and attached
  // to the response for further authentication. Not completed due to
  // time limitations
  return {
    user: {
      email: userRecord.email,
      firstName: userRecord.firstName,
      lastName: userRecord.lastName,
    },
    status: 200,
  };
};
