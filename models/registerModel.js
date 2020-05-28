const mongoose =require('mongoose')

const favouriteSchema =mongoose.Schema({
    title:String,
    id:String
})
const wishlistSchema =mongoose.Schema({
    title:String,
    id:String
})


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    favourite:[favouriteSchema],
    wishlist:[wishlistSchema]
  
})

module.exports=mongoose.model('Register',userSchema)