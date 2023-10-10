import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

 const userSchema =mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phoneNumber:String
})

//For  auto increment of every single User record

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');


const User = mongoose.model('user',userSchema);

export default User;