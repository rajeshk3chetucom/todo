const {Schema, model, Types} = require('mongoose');

const required = true;

const workSchema = new Schema({
    title:{
        type: String,
        required
    },
    description:String,
    user:{
        type: Types.ObjectId,
        ref:'user',
        required
    },
    status:{
        type:String,
        enum:['todo', 'inprogress', 'completed', 'pending'],
        default:'todo'
    },
    date:{type: Date}
    
})


module.exports = model('work', workSchema);