const jwt = require('jsonwebtoken');
 
const skey = 'nodemh'; 

const generateToken = (query) => {
  const token = jwt.sign(query, skey);
  return token;
};

module.exports = { generateToken, skey }
