const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
    pname:{
        type:String
    },
    price:{
        type:Number
    },
    size:{
        type:String
    },
    quantity:{
        type:Number
    },
    image:{
        type:String
    },
    totalprice:{
        type:Number
    }
    
   
})
const cartitems=mongoose.model('cartitems',Schema)
module.exports=cartitems