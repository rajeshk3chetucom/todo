const Joi = require('joi');


module.exports.ValidateAddWork = (values)=>{
    const schema = Joi.object({
        title: Joi.string().min(5).required().label('Title'),
        description: Joi.string().min(50).required().label('Title'),
         
        status: Joi.string().default('todo').label('Status'),
        date:Joi.date().default(Date.now())
    });

    return schema.validate(values,{abortEarly:false})
}