const { status400, status200 } = require("../utils/response");
const { ValidateAddWork } = require("../validator/workValidator")
const WorkModel = require('../modal/work');

module.exports.AddWork = async (req,res,next)=>{
    // validate 
    const {value,error} =  ValidateAddWork(req.body);
    if(error) return status400(res,error, 'Invalid Data!');
    // shape 
        // replace with the token id
        value.user = '627e2e615e813e7a47981f48'
    // database save 
        const query = new WorkModel(value);
        const work = await query.save();

    // response
    status200(res,work,'Work Added Successfully!');
}