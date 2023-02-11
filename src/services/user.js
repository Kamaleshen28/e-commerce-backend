const {userCredentials} = require('../../database/models');
const httpError = require('../utils/httpError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const isUsernameAvailable = async (username) => {
  const user = await userCredentials.findOne({where: { username } });
  return user;
};

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

//1..
const createUserService = async (username, password, role) => {
  const isAvailable = await isUsernameAvailable(username);
  if (isAvailable) {
    throw new httpError('Username not available', 409);
  }
  const hashedPassword = await hashPassword(password);
  const userCreated = await userCredentials.create({ username, password: hashedPassword, role });
  return userCreated;
};

const generateJWT = (payload) => {
  const token = jwt.sign(payload, 'secret', {
    expiresIn:3600
  } );
  return token;
};

//2..
const loginUserService = async (username, password) => {
  const user = await isUsernameAvailable(username);
  const payload = {username: username, role:user.dataValues.role};

  if (!user.dataValues) {
    throw new httpError('Invalid Username', 401);
  }

  const comparePassword = await bcrypt.compare(password, user.dataValues.password);
  if (!comparePassword) {
    throw new httpError('Invalid Password', 401);
  }

  const token = generateJWT(payload);
  return token;
};

module.exports = {
  createUserService,
  loginUserService
};