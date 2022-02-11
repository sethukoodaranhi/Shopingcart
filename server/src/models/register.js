const mongoose=require('mongoose')
const Schema=mongoose.Schema
const regSchema=new Schema({
    loginid:{
        type:Schema.Types.ObjectId,
        ref:"logindb"
    },
    usname:{
        type:String
    },
    email:{
        type:String
    },
    mob:{
        type:String
    },
    sex:{
        type:String
    }
    
})
const regdb=mongoose.model('regdb',regSchema)
module.exports=regdb