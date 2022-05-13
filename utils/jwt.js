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