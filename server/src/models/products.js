const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
   pname:{
       type:String
   },
   price:{
       type:String
   },
  image:{
    type:String
}

})
const Addproducts=mongoose.model("Addproducts",Schema)
module.exports=Addproducts
