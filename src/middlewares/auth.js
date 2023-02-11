const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  try{
    const { token } = req.headers;
    if (!token) {
      res.status(401).json({ message: 'please provide token' });
    }
    const {role} = jwt.verify(token, 'secret');
    req.role = role;
    next();
  }catch(error){
    res.status(500).json({msg:'Something went wrong, try again later..'});
  }
  

};

module.exports = {
  authenticateUser,
};