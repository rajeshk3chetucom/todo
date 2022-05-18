const JWT = require('jsonwebtoken');
const privateKey = 'Chetu@123';
module.exports.signToken = (value={})=>{
    const response =  {token: '', error:null}
    try{
        response.token = JWT.sign(value,privateKey); 
    }catch(error){
        console.log('while generating token',error.message);
        response.error = error 
    }
    return response;
}


module.exports.verifyToken = async(token)=>{
    try {
        const verify = await JWT.verify(token,privateKey);
        return verify;
    } catch (error) {
        console.log('Error while verifying the Token.', error)
        return false 
    }
}