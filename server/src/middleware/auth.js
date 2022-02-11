const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lZ2EiLCJ1c2VyaWQiOiI2MWVlNmQ1ZTJlMDZlYTRjNTM4ZjllZWQiLCJpYXQiOjE2NDMwODMyMzZ9.mPNYvD8y7-E0HsZf4VOIB5zDWulqyuSofFF-EgWVLZQ"
    var [header,payload,signature]=token.split(".")
    console.log(header)
    console.log(payload)
    console.log(signature)
    // const token=req.headers.authorization.split("")[1]
    // console.log("Token :  : : "+token)
    const decod=jwt.verify(token,"eshopyuser")
    req.userdata={
        username:decod.username,
        userid:decod.userid
    }
    console.log(req.userdata)
    next()
}