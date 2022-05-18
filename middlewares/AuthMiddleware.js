const { status400, status200 } = require("../utils/response");
const JWT = require('jsonwebtoken');
const { verifyToken } = require("../utils/jwt");
module.exports.CheckSignIn = async (req,res,next) =>{
    const token = req.headers['x-auth-token'];
    if(!token){
        return status400(res,{message:'Invalid Token'}, 'Invalid toke!')
    }
    const verify = await verifyToken(token);
    if(!verify) return status400(res,{message:'Invalid Token'}, 'Invalid toke!');
    req.userId = verify.id;
    next();
}