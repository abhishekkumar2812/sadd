const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true
    },
    postedby:{
        type: ObjectId,
        ref:"User"
    }
})
//module.exports = Post = 
mongoose.model('Post', PostSchema);