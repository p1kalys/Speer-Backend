const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    let token = req.header('Authorization');
    token = token.replace(/^Bearer\s+/, "");
    // console.log(token);
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Forbidden'});
        }
        req.user = user;
        // console.log(user);
        next();
    });
};

module.exports = {
    authenticateJWT
};