const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
})

//module.exports = User = mongoose.model('user', UserSchema);
mongoose.model("User", UserSchema)