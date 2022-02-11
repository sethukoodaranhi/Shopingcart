const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
    houseno:{
        type:Number
    },
    area:{
        type:String
    },
    mobile:{
        type:Number
    },
   pincode:{
        type:Number
    },
    landmark:{
        type:String
    }
    
   
})
const deliveryaddress=mongoose.model('deliveryaddress',Schema)
module.exports=deliveryaddress