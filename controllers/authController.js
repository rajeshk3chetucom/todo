const userModal = require('../modal/user');
const Joi = require('joi');
const { status400, status200, status501 } = require('../utils/response');
const { SignUpValidator } = require('../validator/user');
const { encryptPass, matchPassword } = require('../utils/encript');
const {v4} = require('uuid');
module.exports.signUp =  async (req,res,next)=>{ 
try {

// validate
const {value:joiValue, error} = SignUpValidator(req.body)
// Error logic
if(error){
    return status400(req, error, 'Error in Body of the Request');
}else{
    //database work;
    // chech wether email exist or not;
    const isExist = await userModal.findOne({email: joiValue.email});
    if(isExist) return status400(res,' Email Already Exisist.')
    const encPass = await encryptPass(joiValue.password);
    console.log('encPass', encPass)
    const value =  {...joiValue,password:encPass ? encPass :''};
    const reqPre = new userModal(value);
    const userSaved = await reqPre.save();
    return status200(res, userSaved, 'User Created Successfully');
}    
} catch (error) {
    console.log('Internal Server Error', error);
    return status501(res,error)
}

}

module.exports.Login = async (req,res,next) =>{
    const {value, error} =  LoginValidator(req.body);
    
    if(error) return status400(res, error);

    const user = await userModal.findOne({email:value.email});
    if(!user) return status400(res,{message:'Invalid username or password'}, 'Invalid username or password');

    // password match 
    const passwordMatched = await matchPassword(value.password,user.password);
    // if not match error response
    if(!passwordMatched) return status400(res,{message:'Invalid username or password'}, 'Invalid username or password');

    // if matched token refresh token 
    const token = v4();

    status200(res,{token},'Login Successfully! ')

}