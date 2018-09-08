const jwt = require('jsonwebtoken');
const key_jwt = 'dulevujosevic';

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ');
        const d = jwt.verify(token[1], key_jwt);
        req.userData = d;
        next();
    } catch(err){
        return res.send('Pristup zabranjen')
    }
}