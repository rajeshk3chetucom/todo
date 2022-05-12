const {Schema, model, Types} = require('mongoose');

const required = true;
const userSchema = new Schema({
    firstName : {
        type:String,
        required,
        // set: (v)=> String(v).toLowerCase()
        minlength:3
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        unique: true,
        required
    },
    age:{
        type:Number,
        required,
        min:1
    },
    password:{
        type: String, 
    },
    resetKey:{
        type: String,
    },
    resetTimeOUt:{
        type : Date
    }
})


module.exports = model('user', userSchema);