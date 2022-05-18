const { status400, status200, status404 } = require("../utils/response");
const { ValidateAddWork } = require("../validator/workValidator")
const WorkModel = require('../modal/work');

module.exports.AddWork = async (req,res,next)=>{
    // validate 
    const {value,error} =  ValidateAddWork(req.body);
    if(error) return status400(res,error, 'Invalid Data!');
    // shape 
        // replace with the token id
        value.user = req.userId;
    // database save 
        const query = new WorkModel(value);
        const work = await query.save();

    // response
    status200(res,work,'Work Added Successfully!');
}


module.exports.GetWrokDetiails = async (req,res,next) =>{
    
    const todo_id = req.params.todoId;
    const user = req.userId
    // Fetch the data on the database of id ;
    const workDetails = await WorkModel.findOne({_id:todo_id,user});

    if(!workDetails){
        return status404(res,{message:'Unable to find the details with the given work id'});
    }

    status200(res,workDetails, 'Details Fetched Successfully!')

}