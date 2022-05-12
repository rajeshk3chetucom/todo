const Joi = require('joi');

module.exports.SignUpValidator = (data)=>{

    const schema =  Joi.object({
        firstName : Joi.string().min(3).max(255).lowercase().required(),
        lastName: Joi.string().min(3).max(255).required(),
        email:Joi.string().email().required(),
        age:Joi.number().min(10),
        password:Joi.string().required(),
    });
 return schema.validate(data,{abortEarly:false});
    

}


module.exports.LoginValidator = (data)=>{
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    });

    return schema.validate(data,{abortEarly:false})
}