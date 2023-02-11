const services = require('../services/user');
const httpError = require('../utils/httpError');

const createUser = async (req, res) => {
  try{
    const {username, password, role} = req.body;
    const result = await services.createUserService(username, password, role);
    res.status(201).json({message:'Succesfully signed up', user: result});
  }catch(error){
    if(error instanceof httpError){
      res.status(error.code).json({message:error.message});
    }else{
      res.status(500).json({msg:'Something went wrong, try again later..'});
    }
  }
};

const loginUser = async (req, res) => {
  try{
    const {username, password} = req.body;
    const token = await services.loginUserService(username, password);
    res.status(201).json({message:'Succesfully logged in', token: token});
  }catch(error){
    if(error instanceof httpError){
      res.status(error.code).json({message:error.message});
    }else{
      res.status(500).json({msg:'Something went wrong, try again later..'});
    }
  }
};

module.exports = {
  createUser,
  loginUser
};