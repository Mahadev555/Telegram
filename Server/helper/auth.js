const jwt = require('jsonwebtoken');
const skey = 'nodemh'; 


const verifyToken=(token)=>{
    const decoded = jwt.verify(token,skey);
    return decoded
}


module.exports = verifyToken