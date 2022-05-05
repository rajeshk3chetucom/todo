const userModal = require('../modal/user');
const Joi = require('joi');
const { status400, status200, status501 } = require('../utils/response');
const { SignUpValidator } = require('../validator/user');
module.exports.signUp =  async (req,res,next)=>{ 
try {

// validate
const {value, error} = SignUpValidator(req.body)
// Error logic
if(error){
    return status400(req, error, 'Error in Body of the Request');
}else{
    //database work;
    const reqPre = new userModal(value);
    const userSaved = await reqPre.save();
    return status200(req, userSaved, 'User Created Successfully')
}    
} catch (error) {
    console.log('Internal Server Error', error);
    return status501(res,error)
}

}