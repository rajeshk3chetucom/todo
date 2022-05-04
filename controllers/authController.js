const userModal = require('../modal/user')
module.exports.signUp =  async (req,res,next)=>{
const {body} =  req;

//database work;
const reqPre = new userModal({...body});
const userSaved = await reqPre.save();
res.send(userSaved)
}